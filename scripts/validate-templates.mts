#!/usr/bin/env tsx
/**
 * Template Integrity Check
 * 
 * Validates the integrity of the template system:
 * - Checks for unexpected top-level folders under templates/
 * - Verifies NGAS 01-09 presence in custom_gpt
 * - Counts knowledge files in each GPT package (should be ≤ 20)
 */

import fs from 'node:fs/promises';
import path from 'node:path';

const TEMPLATES_ROOT = path.resolve(process.cwd(), 'gpt-packages/templates');
const CUSTOM_GPT_PATH = path.join(TEMPLATES_ROOT, 'custom_gpt');
const GPT_PACKAGES_ROOT = path.resolve(process.cwd(), 'gpt-packages');

// Expected top-level folders under templates/
const EXPECTED_TOP_LEVEL_FOLDERS = new Set([
  'custom_gpt',
  '_library',
  '_system' // Optional, for schema files
]);

// Required NGAS instruction files in custom_gpt
const REQUIRED_NGAS_FILES = [
  '01_identity.template.md',
  '02_purpose.template.md',
  '03_core_behaviour.template.md',
  '04_constraints.template.md',
  '05_safety.template.md',
  '06_output_rules.template.md',
  '07_interaction_rules.template.md',
  '08_ask_vs_infer.template.md',
  '09_end_rules.template.md'
];

const MAX_KNOWLEDGE_FILES = 20;

interface CheckResult {
  success: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Check for unexpected top-level folders under templates/
 */
async function checkTopLevelFolders(): Promise<CheckResult> {
  const result: CheckResult = { success: true, errors: [], warnings: [] };

  try {
    const entries = await fs.readdir(TEMPLATES_ROOT, { withFileTypes: true });
    const folders = entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name);

    for (const folder of folders) {
      if (!EXPECTED_TOP_LEVEL_FOLDERS.has(folder)) {
        result.success = false;
        result.errors.push(
          `Unexpected top-level folder in templates/: "${folder}"`
        );
      }
    }

    if (result.success) {
      console.log('✓ Top-level folder structure is valid');
    }
  } catch (error) {
    result.success = false;
    result.errors.push(`Failed to read templates directory: ${error}`);
  }

  return result;
}

/**
 * Verify NGAS 01-09 files exist in custom_gpt/instructions/
 */
async function checkNGASFiles(): Promise<CheckResult> {
  const result: CheckResult = { success: true, errors: [], warnings: [] };
  const instructionsPath = path.join(CUSTOM_GPT_PATH, 'instructions');

  try {
    const entries = await fs.readdir(instructionsPath);

    for (const requiredFile of REQUIRED_NGAS_FILES) {
      if (!entries.includes(requiredFile)) {
        result.success = false;
        result.errors.push(
          `Missing NGAS file in custom_gpt/instructions/: "${requiredFile}"`
        );
      }
    }

    if (result.success) {
      console.log('✓ All NGAS 01-09 files present in custom_gpt');
    }
  } catch (error) {
    result.success = false;
    result.errors.push(
      `Failed to read custom_gpt/instructions directory: ${error}`
    );
  }

  return result;
}

/**
 * Count knowledge files in each GPT package
 */
async function checkKnowledgeFileCounts(): Promise<CheckResult> {
  const result: CheckResult = { success: true, errors: [], warnings: [] };

  try {
    const entries = await fs.readdir(GPT_PACKAGES_ROOT, { withFileTypes: true });
    const gptFolders = entries
      .filter(entry => entry.isDirectory())
      .filter(entry => !entry.name.startsWith('.') && !entry.name.startsWith('_') && entry.name !== 'templates')
      .map(entry => entry.name);

    for (const gptFolder of gptFolders) {
      const knowledgePath = path.join(GPT_PACKAGES_ROOT, gptFolder, 'knowledge');

      try {
        await fs.access(knowledgePath);
        const knowledgeFiles = await countMarkdownFiles(knowledgePath);

        if (knowledgeFiles > MAX_KNOWLEDGE_FILES) {
          result.success = false;
          result.errors.push(
            `GPT package "${gptFolder}" has ${knowledgeFiles} knowledge files (max: ${MAX_KNOWLEDGE_FILES})`
          );
        } else if (knowledgeFiles > MAX_KNOWLEDGE_FILES * 0.9) {
          result.warnings.push(
            `GPT package "${gptFolder}" has ${knowledgeFiles} knowledge files (close to max: ${MAX_KNOWLEDGE_FILES})`
          );
        }
      } catch {
        // Knowledge folder doesn't exist, which is fine for some packages
      }
    }

    if (result.success && result.warnings.length === 0) {
      console.log('✓ All GPT packages have ≤ 20 knowledge files');
    }
  } catch (error) {
    result.success = false;
    result.errors.push(`Failed to check GPT packages: ${error}`);
  }

  return result;
}

/**
 * Recursively count markdown files in a directory
 */
async function countMarkdownFiles(dir: string): Promise<number> {
  let count = 0;

  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        count += await countMarkdownFiles(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        count++;
      }
    }
  } catch (error) {
    // Silently ignore read errors
  }

  return count;
}

/**
 * Main execution
 */
async function main() {
  console.log('Running template integrity checks...\n');

  const checks = [
    { name: 'Top-level folders', fn: checkTopLevelFolders },
    { name: 'NGAS 01-09 files', fn: checkNGASFiles },
    { name: 'Knowledge file counts', fn: checkKnowledgeFileCounts }
  ];

  let allPassed = true;
  const allWarnings: string[] = [];

  for (const check of checks) {
    console.log(`Checking: ${check.name}...`);
    const result = await check.fn();

    if (!result.success) {
      allPassed = false;
      for (const error of result.errors) {
        console.error(`  ✗ ${error}`);
      }
    }

    for (const warning of result.warnings) {
      console.warn(`  ⚠ ${warning}`);
      allWarnings.push(warning);
    }

    console.log('');
  }

  // Summary
  if (allPassed) {
    console.log('✓ All template integrity checks passed');
    if (allWarnings.length > 0) {
      console.log(`  (with ${allWarnings.length} warning(s))`);
    }
    process.exit(0);
  } else {
    console.error('✗ Template integrity checks failed');
    process.exit(1);
  }
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
