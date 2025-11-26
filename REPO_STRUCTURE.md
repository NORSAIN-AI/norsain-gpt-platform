# Repository Structure

Automatisk generert: 2025-11-25 15:20

```text
/
├── .husky
│   ├── _
│   │   ├── .gitignore
│   │   ├── applypatch-msg
│   │   ├── commit-msg
│   │   ├── h
│   │   ├── husky.sh
│   │   ├── post-applypatch
│   │   ├── post-checkout
│   │   ├── post-commit
│   │   ├── post-merge
│   │   ├── post-rewrite
│   │   ├── pre-applypatch
│   │   ├── pre-auto-gc
│   │   ├── pre-commit
│   │   ├── pre-merge-commit
│   │   ├── pre-push
│   │   ├── pre-rebase
│   │   └── prepare-commit-msg
│   └── pre-commit
├── .vscode
│   └── settings.json
├── coverage
│   ├── scripts
│   │   ├── utils
│   │   │   ├── index.html
│   │   │   ├── indexing.mts.html
│   │   │   ├── scaffolding.mts.html
│   │   │   └── validation.mts.html
│   │   ├── check-coverage.mjs.html
│   │   ├── generate-index.mts.html
│   │   ├── generate-repo-structure.mts.html
│   │   ├── index.html
│   │   ├── scaffold-gpt.mts.html
│   │   └── validate-gpt.mts.html
│   ├── base.css
│   ├── block-navigation.js
│   ├── coverage-final.json
│   ├── favicon.png
│   ├── index.html
│   ├── prettify.css
│   ├── prettify.js
│   ├── sort-arrow-sprite.png
│   └── sorter.js
├── docs
│   ├── governance
│   │   └── model-governance-dashboard.md
│   ├── models
│   │   ├── _index.md
│   │   ├── claude-haiku-4.5.md
│   │   ├── claude-sonnet-4.5.md
│   │   ├── gemini-2.5-pro.md
│   │   ├── gpt-4.1.md
│   │   ├── gpt-4o.md
│   │   ├── gpt-5-codex.md
│   │   ├── gpt-5-mini.md
│   │   ├── gpt-5.1-codex.md
│   │   ├── gpt-5.1.md
│   │   ├── gpt-5.md
│   │   ├── grok-code-fast-1.md
│   │   └── raptor-mini.md
│   ├── planning
│   │   ├── CHECKLIST.md
│   │   ├── INDEX.md
│   │   ├── README.md
│   │   └── TODOs-gpt-packages.md
│   ├── testing
│   │   └── vitest-standard.md
│   ├── _sidebar.md
│   ├── index.html
│   ├── index.md
│   ├── model-selection-strategy.md
│   └── q_logo_512x512.svg
├── gpt-packages
│   ├── analytics-bot
│   │   ├── actions
│   │   │   └── schema.json
│   │   ├── instructions
│   │   │   └── main.md
│   │   ├── knowledge
│   │   │   ├── index.md
│   │   │   └── README.md
│   │   ├── gpt.json
│   │   └── README.md
│   ├── backend_core_architect
│   │   ├── actions
│   │   │   └── schema.json
│   │   ├── instructions
│   │   │   └── main.md
│   │   ├── knowledge
│   │   │   ├── 00.01_backend_architecture_principles.md
│   │   │   ├── 00.02_database_design_patterns.md
│   │   │   ├── 00.03_api_design_best_practices.md
│   │   │   ├── index.md
│   │   │   └── README.md
│   │   ├── gpt.json
│   │   └── README.md
│   ├── fullstack_code_architect
│   │   ├── actions
│   │   │   └── schema.json
│   │   ├── instructions
│   │   │   ├── instruction.md
│   │   │   └── main.md
│   │   ├── knowledge
│   │   │   ├── 01.01_role_scope_boundaries.md
│   │   │   ├── index.md
│   │   │   └── README.md
│   │   ├── gpt.json
│   │   └── README.md
│   ├── my-assistant
│   │   ├── actions
│   │   │   └── schema.json
│   │   ├── instructions
│   │   │   └── main.md
│   │   ├── knowledge
│   │   │   ├── index.md
│   │   │   └── README.md
│   │   ├── gpt.json
│   │   └── README.md
│   ├── templates
│   │   ├── _library
│   │   │   ├── evals
│   │   │   │   └── eval_matrix.template.md
│   │   │   ├── knowledge
│   │   │   │   ├── ngas_output_standards_v1.2.template.md
│   │   │   │   └── norsain_language_tone_guide.template.md
│   │   │   └── prompts
│   │   │       └── build_custom_gpt.prompt.md
│   │   ├── actions
│   │   │   └── schema.json
│   │   ├── custom_gpt
│   │   │   ├── actions
│   │   │   │   ├── basic_action.template.json
│   │   │   │   ├── list_items_action.template.json
│   │   │   │   ├── schema.json
│   │   │   │   └── write_items_action.template.json
│   │   │   ├── gpt_metadata
│   │   │   │   ├── conversation_starters.template.md
│   │   │   │   └── metadata_header.template.json
│   │   │   ├── instructions
│   │   │   │   ├── 01_identity.template.md
│   │   │   │   ├── 02_purpose.template.md
│   │   │   │   ├── 03_core_behaviour.template.md
│   │   │   │   ├── 04_constraints.template.md
│   │   │   │   ├── 05_safety.template.md
│   │   │   │   ├── 06_output_rules.template.md
│   │   │   │   ├── 07_interaction_rules.template.md
│   │   │   │   ├── 08_ask_vs_infer.template.md
│   │   │   │   ├── 09_end_rules.template.md
│   │   │   │   └── main.md
│   │   │   ├── knowledge
│   │   │   │   ├── 01.foundation
│   │   │   │   │   ├── eval_and_test_prompts.template.md
│   │   │   │   │   ├── language_tone_output.template.md
│   │   │   │   │   ├── norsain_dev_principles.template.md
│   │   │   │   │   ├── role_scope.template.md
│   │   │   │   │   └── safety_and_ethics.template.md
│   │   │   │   ├── 02.architecture
│   │   │   │   │   ├── api_contracts.template.md
│   │   │   │   │   └── webapp_patterns.template.md
│   │   │   │   ├── 03.typescript
│   │   │   │   │   ├── backend_guidelines.template.md
│   │   │   │   │   ├── frontend_guidelines.template.md
│   │   │   │   │   └── ts_utilities_examples.template.md
│   │   │   │   ├── 04.java
│   │   │   │   │   ├── java_error_testing.template.md
│   │   │   │   │   └── spring_patterns.template.md
│   │   │   │   ├── 05.python
│   │   │   │   │   ├── python_ai_integration.template.md
│   │   │   │   │   └── python_api_patterns.template.md
│   │   │   │   ├── 06.databases_sql
│   │   │   │   │   ├── relational_modelling.template.md
│   │   │   │   │   └── sql_performance_migrations.template.md
│   │   │   │   ├── 07.auth_security
│   │   │   │   │   ├── oauth2_oidc_jwt.template.md
│   │   │   │   │   └── securing_flows.template.md
│   │   │   │   └── 08.ai_mcp
│   │   │   │       ├── ai_mcp_concepts.template.md
│   │   │   │       └── issue_providers_ai_features.template.md
│   │   │   ├── gpt.json
│   │   │   └── template.manifest.json
│   │   ├── evals
│   │   │   ├── eval_log.template.md
│   │   │   ├── eval_matrix.template.md
│   │   │   └── eval_scenarios.template.md
│   │   ├── instructions
│   │   │   ├── 01_identity.template.md
│   │   │   ├── 02_purpose.template.md
│   │   │   ├── 03_core_behaviour.template.md
│   │   │   ├── 04_constraints.template.md
│   │   │   ├── 05_safety.template.md
│   │   │   ├── 06_output_rules.template.md
│   │   │   ├── 07_interaction_rules.template.md
│   │   │   ├── 08_ask_vs_infer.template.md
│   │   │   ├── 09_end_rules.template.md
│   │   │   └── custom_gpt_instructions.md
│   │   ├── knowledge
│   │   │   └── README.md
│   │   ├── logs
│   │   │   └── gpt_generation_log.template.md
│   │   ├── prompts
│   │   │   ├── build_custom_gpt.prompt.md
│   │   │   ├── extend_custom_gpt.prompt.md
│   │   │   └── regenerate_instruction.prompt.md
│   │   └── README.md
│   ├── test_gpt
│   │   ├── actions
│   │   │   ├── basic_action.template.json
│   │   │   ├── list_items_action.template.json
│   │   │   └── write_items_action.template.json
│   │   ├── gpt_metadata
│   │   │   ├── conversation_starters.template.md
│   │   │   └── metadata_header.template.json
│   │   ├── instructions
│   │   │   ├── 01_identity.template.md
│   │   │   ├── 02_purpose.template.md
│   │   │   ├── 03_core_behaviour.template.md
│   │   │   ├── 04_constraints.template.md
│   │   │   ├── 05_safety.template.md
│   │   │   ├── 06_output_rules.template.md
│   │   │   ├── 07_interaction_rules.template.md
│   │   │   ├── 08_ask_vs_infer.template.md
│   │   │   └── 09_end_rules.template.md
│   │   └── knowledge
│   │       ├── 01.foundation
│   │       │   ├── eval_and_test_prompts.template.md
│   │       │   ├── language_tone_output.template.md
│   │       │   ├── norsain_dev_principles.template.md
│   │       │   ├── role_scope.template.md
│   │       │   └── safety_and_ethics.template.md
│   │       ├── 02.architecture
│   │       │   ├── api_contracts.template.md
│   │       │   └── webapp_patterns.template.md
│   │       ├── 03.typescript
│   │       │   ├── backend_guidelines.template.md
│   │       │   ├── frontend_guidelines.template.md
│   │       │   └── ts_utilities_examples.template.md
│   │       ├── 04.java
│   │       │   ├── java_error_testing.template.md
│   │       │   └── spring_patterns.template.md
│   │       ├── 05.python
│   │       │   ├── python_ai_integration.template.md
│   │       │   └── python_api_patterns.template.md
│   │       ├── 06.databases_sql
│   │       │   ├── relational_modelling.template.md
│   │       │   └── sql_performance_migrations.template.md
│   │       ├── 07.auth_security
│   │       │   ├── oauth2_oidc_jwt.template.md
│   │       │   └── securing_flows.template.md
│   │       └── 08.ai_mcp
│   │           ├── ai_mcp_concepts.template.md
│   │           └── issue_providers_ai_features.template.md
│   ├── test_template_resolve_1763549456726
│   │   └── gpt_metadata
│   ├── test_template_resolve_1763549613860
│   │   ├── actions
│   │   │   ├── basic_action.template.json
│   │   │   ├── list_items_action.template.json
│   │   │   └── write_items_action.template.json
│   │   ├── gpt_metadata
│   │   │   ├── conversation_starters.template.md
│   │   │   └── metadata_header.template.json
│   │   ├── instructions
│   │   │   ├── 01_identity.template.md
│   │   │   ├── 02_purpose.template.md
│   │   │   ├── 03_core_behaviour.template.md
│   │   │   ├── 04_constraints.template.md
│   │   │   ├── 05_safety.template.md
│   │   │   ├── 06_output_rules.template.md
│   │   │   ├── 07_interaction_rules.template.md
│   │   │   ├── 08_ask_vs_infer.template.md
│   │   │   └── 09_end_rules.template.md
│   │   └── knowledge
│   │       ├── 01.foundation
│   │       │   ├── eval_and_test_prompts.template.md
│   │       │   ├── language_tone_output.template.md
│   │       │   ├── norsain_dev_principles.template.md
│   │       │   ├── role_scope.template.md
│   │       │   └── safety_and_ethics.template.md
│   │       ├── 02.architecture
│   │       │   ├── api_contracts.template.md
│   │       │   └── webapp_patterns.template.md
│   │       ├── 03.typescript
│   │       │   ├── backend_guidelines.template.md
│   │       │   ├── frontend_guidelines.template.md
│   │       │   └── ts_utilities_examples.template.md
│   │       ├── 04.java
│   │       │   ├── java_error_testing.template.md
│   │       │   └── spring_patterns.template.md
│   │       ├── 05.python
│   │       │   ├── python_ai_integration.template.md
│   │       │   └── python_api_patterns.template.md
│   │       ├── 06.databases_sql
│   │       │   ├── relational_modelling.template.md
│   │       │   └── sql_performance_migrations.template.md
│   │       ├── 07.auth_security
│   │       │   ├── oauth2_oidc_jwt.template.md
│   │       │   └── securing_flows.template.md
│   │       └── 08.ai_mcp
│   │           ├── ai_mcp_concepts.template.md
│   │           └── issue_providers_ai_features.template.md
│   └── README.md
├── reports
│   ├── REPO_STRUCTURE.md
│   └── repo-gap-analysis-20251117.md
├── scripts
│   ├── utils
│   │   ├── __tests__
│   │   │   └── scaffolding.template-resolution.test.mts
│   │   ├── indexing.mts
│   │   ├── scaffolding.mts
│   │   └── validation.mts
│   ├── check-coverage.mjs
│   ├── generate-index.mts
│   ├── generate-repo-structure.mts
│   ├── README.md
│   ├── scaffold-gpt.mts
│   └── validate-gpt.mts
├── tests
│   ├── README.md
│   └── scaffolding.integration.test.mts
├── web
│   ├── .gitkeep
│   └── README.md
├── .eslintrc.json
├── .gitignore
├── .gitmessage
├── .markdownlint.jsonc
├── .markdownlintignore
├── .pre-commit-config.yaml
├── .prettierrc
├── LICENSE
├── Makefile
├── package-lock.json
├── package.json
├── README.md
├── SECURITY.md
├── tsconfig.json
└── vitest.config.ts
```
