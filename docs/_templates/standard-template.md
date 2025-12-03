---
title: "[Human readable standard title]"
version: "1.0.0"
status: "draft"
date: "YYYY-MM-DD"
owner: "role-or-team"
document-type: "standard"
authors:
  - "role-or-team"
tags:
  - "documentation"
  - "standard"
  - "governance"
supersedes: ""
superseded_by: ""
---

# [Human readable standard title]

## Usage Instructions

Denne malen brukes for å beskrive en standard som skal følges på tvers av team, kodebaser eller prosesser.
Den er ment for både tekniske og organisatoriske standarder (kode, struktur, prosess, dokumentasjon osv.).

Når du fyller ut denne malen:

- Skriv kortfattet og presist.
- Bruk konkrete krav (“skal”, “må”) der standarden er obligatorisk.
- Bruk “bør” for anbefalinger som kan fravikes med begrunnelse.
- Unngå faglig sjargong uten definisjoner.
- Oppdater metadata (status, versjon, dato, supersedes) når standarden endres.

## 1. Formål

Beskriv hva standarden regulerer, og hvorfor den finnes.

Eksempler på spørsmål å besvare:

- Hvilket problem løser standarden?
- Hvilke gevinster gir den (kvalitet, fart, risiko, konsistens)?
- Hvilke brukere, team eller systemer blir påvirket?

## 2. Omfang

Definer hvilke repoer, systemer, prosesser eller domener standarden gjelder for.

Eksempler:

- Gjelder alle repos under `NORSAIN-AI/*`.
- Gjelder kun backend-tjenester i `platform`-monorepo.
- Gjelder all dokumentasjon i `company-docs`.

Presiser gjerne:

- In scope
- Out of scope

## 3. Definisjoner

Liste over sentrale begreper og forkortelser som brukes i standarden.

Eksempler:

- “Service”: …
- “Public API”: …
- “Critical path”: …

Målet er at lesere med ulik bakgrunn skal kunne tolke standarden likt.

## 4. Regler

Beskriv konkrete krav og regler som skal følges.

Bruk gjerne underseksjoner for å strukturere innholdet, for eksempel:

### 4.1 Navnekonvensjoner

Beskriv navnestandarder for filer, mapper, branches, API-endepunkter osv.

### 4.2 Strukturelle krav

Krav til mappestruktur, moduloppdeling, dokumentstruktur, repo-layout.

### 4.3 Prosess- og kvalitetskrav

Krav til code review, testing, dokumentasjon, sjekklister og godkjenninger.

### 4.4 Unntak og dispensasjoner

- Når kan standarden fravikes?
- Hvem kan godkjenne unntak?
- Hvordan skal unntak dokumenteres?

Bruk “skal/må” for harde krav, “bør” for anbefalinger.

## 5. Eksempler

Gi korte, konkrete eksempler som viser hvordan standarden skal anvendes i praksis.

Eksempler kan være:

- Eksempel på korrekt og feil struktur.
- Eksempel på gyldig navnekonvensjon.
- Eksempel på “før/etter” ved migrering til ny standard.

Målet er å gjøre standarden lett å forstå og enkel å følge.

## 6. Forvaltning

Beskriv hvordan standarden eies, vedlikeholdes og videreutvikles.

### 6.1 Eier

- Hvilken rolle eller hvilket team eier standarden?
- Hvem har ansvar for å svare på spørsmål?

### 6.2 Endringsprosess

- Hvordan foreslås endringer?
- Hvem kan foreslå endringer (team, roller)?
- Hvordan godkjennes endringer (forum, rolle, prosess)?

### 6.3 Versjonering og livssyklus

- Hvordan oppdateres `version`, `status`, `date`, `supersedes` og `superseded_by`?
- Når skal status endres fra `draft` til `active` eller `deprecated`?
- Hvordan håndteres gamle standarder (arkivering, referanse)?

## 7. Relaterte dokumenter

Lenk til andre standarder, retningslinjer eller referanser som er relevante:

- Andre standarder denne bygger på eller overlapper med.
- Prosessdokumenter, arkitekturdokumenter eller policyer.
- Eksterne referanser (for eksempel ISO, OWASP, interne rammeverk).
