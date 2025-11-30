# Custom GPT Design Standard (Draft)

## Navneregler
- `<domain>-<role>-vX.Y` (eks: `platform-dev-architect-v2.4`)

## UI-felt
- Navn
- Kort beskrivelse (maks 300 tegn)
- Systeminstruksjon (≤ 8 000 tegn)

## Skille
- UI: rolle, scope, safety, struktur
- Knowledge: standarder + statisk fakta
- Repo (GitHub/Notion): runtime SoT for domene (leses via actions)

## Bruk av actions
- Alltid lese først
- Aldri skrive uten eksplisitt bekreftelse fra bruker

## For arkitekt-typer
Svarstruktur i 4 seksjoner:
1. Architecture Analysis
2. Git Strategy
3. Plan and Files
4. Implementation Context
