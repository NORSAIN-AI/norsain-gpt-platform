# GitHub Copilot Configuration

Dette biblioteket inneholder GitHub Actions-workflows og konfigurasjoner for GitHub Copilot i `norsain-gpt-platform`.

## Workflows

- `validate-gpts.yml` – Kjører validering av GPT-strukturer og maks 20 kunnskapsfiler på push/PR.

## Prompt og instruksjonsfiler

- `.github/copilot-instructions.md` – Overordnede workspace-instruksjoner for Copilot.
- `.github/prompts/` – Bibliotek med `.prompt.md`-filer for commit-meldinger, PR-beskrivelser, branch-navn og filgenerering.

## Future Enhancements

- Automatiserte deploy-workflows for GPT-agenter
- Integrasjon med ChatKit for agent-testing
- Evaluerings- og benchmark-pipelines


