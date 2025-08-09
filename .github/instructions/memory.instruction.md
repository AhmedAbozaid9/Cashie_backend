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
-- Main entry file moved to: src/index.ts (from api/index.ts)
- Deployment target: Vercel Functions (Node.js runtime)

## Coding Patterns

- Modular middleware extraction
- Prefer named exports for middlewares
- Lint compliance (no console.log, use console.warn/error)
- Use import type for type-only imports

## Context7 Research History

- 2025-08-09: Vercel Node Functions + Express guide reviewed; use api handler exporting Express app; prefer vercel.json rewrites to route all paths to function; TypeScript in /api is compiled, other TS built via vercel-build.
- Sources: Vercel Docs Node.js Runtime, Using Express with Vercel (2025-07/04 updates)

## Conversation History

- Refactored headers middleware from index.ts to middlewares/headers.ts
- Fixed lint errors (import type, missing return type, console.log)
- Main entry file location changed to src/index.ts; all config references updated, old api/index.ts removed, lint errors fixed
- Added Vercel deployment wiring: api/index.ts serverless entry; vercel.json rewrites; package.json postinstall + vercel-build

## Notes

- Middleware extraction pattern established for future refactors
- Ensure all build/dev/start scripts use new entry file
- Check for any hardcoded references in codebase
- For Vercel: requests are rewritten to /api/index so original URL is preserved for Express routing
