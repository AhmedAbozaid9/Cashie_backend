// Bridge Express app to Vercel Functions
// Try to use compiled JS in Vercel build, fall back to TS source locally
let app: any;
try {
  // When built on Vercel (vercel-build runs `tsc`), use compiled output
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  app = require("../dist/api/index.js").default;
} catch {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  app = require("../src/api/index").default;
}

export default app as any;
