---
title: "[System or component technical specification]"
version: "1.0.0"
status: "draft"
date: "YYYY-MM-DD"
owner: "role-or-team"
document-type: "template-technical-spec"
authors:
  - "role-or-team"
tags:
  - "documentation"
  - "specification"
  - "technical"
supersedes: ""
superseded_by: ""
---

# [System or component technical specification]

## Usage Instructions

Denne malen brukes til å beskrive tekniske spesifikasjoner for systemer, komponenter eller tjenester.
Den er egnet for både nye løsninger og endringer i eksisterende systemer.
Skrivestil og tone styres av persona-filen til LLM Precision Assistant.

Når du fyller ut malen:

- Vær presis og utvetydig.
- Unngå implementasjonsdetaljer som ikke er relevante på spesifikasjonsnivå.
- Skill mellom krav (må) og valg (kan/bør).
- Hold funksjonelle krav og ikke-funksjonelle krav tydelig adskilt.

## 1. Oversikt

Beskriv kort:

- hva systemet eller komponenten er
- hvilket problem det løser
- hvordan det passer inn i helheten

## 2. Mål og ikke-mål

### 2.1 Mål

Liste over mål som løsningen skal oppfylle.

### 2.2 Ikke-mål

Beskriv eksplisitt hva løsningen ikke skal dekke.
Dette reduserer misforståelser og scope creep.

## 3. Krav

### 3.1 Funksjonelle krav

Liste over funksjoner, gjerne nummerert.

Eksempel:

- [FR-001] Bruker skal kunne …
- [FR-002] Systemet skal …

### 3.2 Ikke-funksjonelle krav

Krav til:

- ytelse
- skalerbarhet
- robusthet
- sikkerhet
- personvern
- tilgjengelighet

## 4. Arkitektur

### 4.1 Høy-nivå-arkitektur

Beskriv den overordnede strukturen.

Inkluder:

- hovedkomponenter
- hvordan de henger sammen
- overordnede integrasjonspunkter

### 4.2 Komponentbeskrivelser

Beskriv hver sentrale komponent:

- ansvar
- grensesnitt
- avhengigheter

## 5. Datamodell

Beskriv sentrale datastrukturer:

- entiteter
- felter
- relasjoner

Hvis relevant kan du ha egne underseksjoner for:

- domenemodell
- lagringsmodell
- API-modell

## 6. API-spesifikasjon

Beskriv relevante API-er:

- endepunkter
- metoder
- input
- output
- feilkoder

Ved behov kan detaljerte OpenAPI- eller JSON-schemaer legges i vedlegg.

## 7. Deploy og infrastruktur

Beskriv hvordan løsningen:

- deployes
- driftes
- overvåkes

Ta med:

- miljøer
- avhengigheter (databaser, meldingskøer, eksterne systemer)
- ressursbehov

## 8. Sikkerhet og personvern

Beskriv:

- autentisering og autorisasjon
- dataklassifisering
- logging og revisjonsspor
- krav til kryptering
- eventuelle personvernvurderinger

## 9. Teststrategi

Beskriv hvordan løsningen skal testes:

- typer tester (enhet, integrasjon, ende-til-ende)
- kvalitetsmål
- krav til testdekning
- bruk av testdata

## 10. Vedlegg

Legg detaljer som:

- diagrammer
- schema-definisjoner
- referansedokumenter
