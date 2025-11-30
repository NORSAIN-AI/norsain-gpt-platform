
---
title: NORSAIN Custom GPT – Designstandard
document_id: custom-gpt-design-standard
status: draft
version: 0.1.0
owner: norsain-ai/platform-architecture
tags:
  - gpt
  - design
  - standard
---

# NORSAIN Custom GPT – Designstandard

## 1. Formål

Denne standarden beskriver hvordan NORSAIN definerer og konfigurerer Custom GPT-er:

- navn og versjonering  
- bruk av GPT UI (Layer B)  
- bruk av knowledge-filer  
- forventet svarstruktur for tekniske og arkitektroller  
- grunnprinsipper for bruk av actions

Målet er at alle NORSAIN GPT-er skal være konsistente, reviderbare og forutsigbare på tvers av domener.

## 2. Navneregler

### 2.1 Format

Formatet for agentnavn er:

```text
<domain>-<role>-vX.Y
```

Eksempler:

```text
platform-dev-architect-v2.4
qms-audit-architect-v1.0
tracetimber-compliance-assistant-v0.3
```

### 2.2 Regler

* `domain` reflekterer primærdomenet:
  * for eksempel `platform`, `qms`, `tracetimber`.
* `role` beskriver agentens funksjon:
  * for eksempel `dev-architect`, `audit-architect`, `assistant`.
* `vX.Y` følger et semver-lignende mønster:
  * `X` for større endringer i rolle eller oppførsel
  * `Y` for inkrementelle forbedringer innenfor samme rolle

Navnet skal speiles både i:

* GPT-navnet i UI
* tilhørende agentdokumentasjon under `docs/04-agents/<agent-name>/`

## 3. GPT UI – felter og begrensninger

Hver NORSAIN Custom GPT skal som minimum ha følgende felter konfigurert i UI.

### 3.1 Name

* Følger navnekonvensjonen beskrevet i seksjon 2.
* Skal være entydig innenfor NORSAIN sitt GPT-landskap.

### 3.2 Short description

* Maks 300 tegn.
* Skal beskrive:
  * rolle
  * primærdomenet agenten jobber mot
  * hovedoppgaver
* Skal ikke beskrive:
  * intern implementasjon
  * modellnavn
  * tekniske detaljer om actions eller verktøy

### 3.3 System instructions (Layer B)

* Maks 8 000 tegn.
* Skal inneholde:
  * rolle og mandat
  * språk og tone (med henvisning til NGAS-01)
  * operasjonsregler, for eksempel:
    * Git-strategi
    * bruk av Notion- og GitHub-actions
  * safety- og prioritetshierarki
  * kort referanse til knowledge- og kildehierarki

Systeminstruksjonen skal være **operasjonell**:

* beskrive hvordan agenten skal tenke og arbeide
* ikke kopiere hele standarder, arkitektur- eller policytekster som ligger i egne dokumenter

Detaljer om knowledge-hierarki og kildeprioritet skal ligge i egne filer under:

* `docs/04-agents/<agent-name>/20-knowledge-hierarchy-vX.Y.md`

## 4. Separation of Concerns

For alle NORSAIN Custom GPT-er gjelder et tydelig skille mellom UI, knowledge og repos.

### 4.1 GPT UI (Layer B)

* Definerer hvordan agenten tenker og jobber.
* Inneholder:
  * rolledefinisjon
  * scope
  * operasjonsregler
  * referanser til standarder og kilder
* Inneholder ikke:
  * lange standardtekster
  * store tabeller
  * fullstendige arkitekturbeskrivelser

Slike tekster skal ligge i egne markdown-filer i relevante repoer.

### 4.2 Knowledge-filer

* Inneholder relativt statiske standarder og fakta, for eksempel:
  * NGAS-sammendrag
  * knowledge-hierarchy for agenten
  * domenespesifikke referansedokumenter
* Begrensning:
  * maks 20 knowledge-filer per GPT
* Forvaltning:
  * struktureres og eies via `llm-platform`
  * versjoneres og revideres via Git

Knowledge-filer skal ikke duplisere innhold som allerede finnes i:

* arkitekturdokumentasjon i produktrepoer
* NGAS SoT-dokumenter i eget standards-repo

### 4.3 Repos (GitHub og Notion)

* GitHub- og Notion-repoer er Single Source of Truth for:
  * løpende arkitektur
  * kode og pipelines
  * dokumentmetadata og eierskap
* GPT skal:
  * lese fra GitHub og Notion via actions
  * ikke forutsette at statiske knowledge-kopier alltid er ferske

Tilgang til repos styres gjennom actions, ikke ved å lime inn repo-innhold direkte i UI-instillingene.

## 5. Actions – bruksmønster

For alle NORSAIN GPT-er som bruker actions (GitHub, Notion eller andre systemer) gjelder følgende prinsipper.

### 5.1 Read-first

* Agenten skal alltid lese fra kilde (GitHub eller Notion) før den antar noe om:
  * repo-tilstand
  * dokumentstruktur
  * dokumentstatus eller eierskap

Eksempel:

* ved spørsmål om arkitektur:
  * les relevante filer fra produktrepoet via GitHub-action
* ved spørsmål om dokumentstatus:
  * les fra Notion-registeret, ikke anta basert på gammel kontekst

### 5.2 No implicit writes

* Ingen skriving til Notion eller andre systemer skal skje uten eksplisitt bekreftelse i samme samtale.
* GPT skal alltid:
  * beskrive hva som er planlagt skrevet
  * be om eksplisitt “ja” fra bruker før actions for skriving utføres

Dette gjelder spesielt for:

* dokumentstatus i Notion
* opprettelse eller endring av metadata
* generering av nye dokumentnoder

### 5.3 Explain intent

Før en write-operasjon foreslås, skal agenten:

* oppsummere hva som tenkes endret
* referere til hvilke dokumenter eller paths som berøres

Eksempel:

* “Jeg foreslår å oppdatere `DB-012` i Notion med ny RepoPath for dette dokumentet.”
* “Endringen vil gjelde raden der `PlatformDocID = platform-dev-architect-instructions`.”

Bruker skal alltid ha mulighet til å avvise eller justere forslaget før skriving skjer.

### 5.4 Safety alignment

* Actions skal brukes i tråd med:
  * NGAS-05-sikkerhetsstandard
  * gjeldende OpenAI-policyer
* GPT skal blant annet unngå:
  * å eksponere sensitive data
  * å foreslå uautoriserte endringer i produksjonsnære systemer

Detaljerte action-standarder, inkludert krav til:

* OpenAPI 3.1-spesifikasjoner
* JSON Schema
* naming og versjonering

beskrives i egen fil:

* `docs/02-custom-gpt-design/custom-gpt-actions-standard.md` (planlagt i senere versjon)

## 6. Svarstruktur for arkitekt-typer

For arkitekt- og utviklerrettede GPT-er, som for eksempel `platform-dev-architect`, brukes følgende svarstruktur som standard.

### 6.1 Architecture Analysis

* Kort oppsummering av hva som skal endres eller vurderes.
* Identifiserer:
  * relevante områder i systemet
  * avhengigheter
  * berørte standarder eller dokumenter

### 6.2 Git Strategy

* Forslag til:
  * branch-navn
  * faser (for eksempel backend, frontend, docs)
  * commit-mønster og størrelse
* Skal understøtte:
  * små, domeneisolerte PR-er
  * tydelig kobling mellom endringer og dokumentasjon

### 6.3 Plan and Files

* Konkret liste over filer og paths som skal endres.
* For hver fil eller path:
  * kort beskrivelse av hva som skal gjøres
  * eventuell rekkefølge eller avhengighet mellom steg

Planen skal være så konkret at den kan brukes som utgangspunkt for en faktisk PR.

### 6.4 Implementation Context

* Inneholder:
  * små, målrettede snippet-eksempler
  * konfigurasjonsutdrag
  * strukturelle forslag
* Inneholder ikke:
  * store mengder boilerplate-kode
  * fullstendige modulimplementasjoner uten at det er strengt nødvendig

Andre GPT-typer kan ha en annen standardstruktur, men skal da:

* eksplisitt dokumentere sin egen svarstruktur under
  `docs/04-agents/<agent>/00-overview.md` eller tilsvarende

