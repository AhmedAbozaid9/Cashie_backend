// Bridge Express app to Vercel Functions
// Try to use compiled JS in Vercel build, fall back to TS source locally
let app: any;
try {
  // When built on Vercel (build step runs `tsc`), use compiled output
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  app = require("../dist/index.js").default;
} catch {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  app = require("../src/index").default;
}

export default function handler(req: any, res: any) {
  return app(req, res);
}
