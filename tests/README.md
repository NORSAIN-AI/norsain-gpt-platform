# Testing Guide

## Run all tests

```bash
npm test
```

## Structure

```text
tests/
  utils/
    scaffolding.template-resolution.test.mts   # unit test for resolving templates
  scaffolding.integration.test.mts            # integration test for full scaffold workflow
```

## Goals

Verify template selection:

`templates/custom_gpt -> templates -> _template`

Verify full scaffolding:

- `scaffoldGPT` creates a valid GPT package
- `validateGPTStructure` returns `valid=true` and no errors
