---
applyTo: "**"
---

# User Memory

## User Preferences

- Programming languages: javascript/ typescript/ next js
- Code style preferences: prettier
- Development environment: vs code
- Communication style: concise, explain actions before tool use

## Project Context

- Current project type: web app backend
- Tech stack: express, typescript, prisma
- Architecture patterns: modular express middleware
- Key requirements: code modularity, lint compliance

## Coding Patterns

- Modular middleware extraction
- Prefer named exports for middlewares
- Lint compliance (no console.log, use console.warn/error)
- Use import type for type-only imports

## Context7 Research History

- No Context7 research required for this refactor

## Conversation History

- Refactored headers middleware from index.ts to middlewares/headers.ts
- Fixed lint errors (import type, missing return type, console.log)

## Notes

- Middleware extraction pattern established for future refactors
