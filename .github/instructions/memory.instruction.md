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
- Main entry file moved to: src/api/index.ts (from root)

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
- Main entry file location changed to src/api/index.ts; need to update all references and scripts to reflect new location

## Notes

- Middleware extraction pattern established for future refactors
- Ensure all build/dev/start scripts use new entry file
- Check for any hardcoded references in codebase
