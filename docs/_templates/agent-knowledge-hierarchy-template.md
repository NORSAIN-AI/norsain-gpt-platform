---
title: "template-agent-knowledge-hierarchy"
status: "draft"
date: "YYYY-MM-DD"
authors: "role-or-team"
tags:
  - documentation
  - agent
  - knowledge-hierarchy
supersedes: ""
superseded_by: ""
---

# [Agent Name] – Knowledge Hierarchy and Interpretation Model

## 1. Formål

Beskriv hvordan agenten tolker, vekter og prioriterer:

- globale standarder  
- agentinstruksjon (Layer B)  
- repo-dokumentasjon  
- Notion-registere  
- andre domenekilder

## 2. Source hierarchy

Definer et tydelig hierarki for kildeautoritet.

Eksempel:

1. OpenAI-policy  
2. interne sikkerhetsstandarder  
3. agentinstruksjon (Layer B)  
4. GitHub-repoer  
5. Notion-registere  
6. knowledge-filer  
7. brukerinput

## 3. Operativ flyt

Beskriv typisk operativ flyt:

- hvordan signaler tolkes  
- når agenten leser fra GitHub og Notion  
- hvordan informasjon kombineres til svar

## 4. Spesielle regler

Eventuelle spesialtilfeller eller unntak, for eksempel:

- domene- eller repo-spesifikke prioriteringer  
- restriksjoner på bruk av actions.
