import express from "express";
import { notFound } from "./middlewares/notFound";
import authRoutes from "./routes/auth.routes";
import accountRoutes from "./routes/account.routes";
import { auth } from "./middlewares/auth";
import { headersMiddleware } from "./middlewares/headers";

const app = express();
const PORT = parseInt(process.env.PORT || "8080");

app.use(express.json());
app.use(headersMiddleware);
// Support both prefixed and non-prefixed API paths in serverless
app.use(["/api/auth", "/auth"], authRoutes);
app.use(["/api/accounts", "/accounts"], auth, accountRoutes);

// Add a root route for testing
app.get("/", (req, res) => {
  res.json({
    message: "API is working!",
    env: process.env.NODE_ENV,
    custom_env: process.env.ENV,
  });
});

// Use NODE_ENV instead of ENV, or check for Vercel environment
if (process.env.NODE_ENV !== "production" && !process.env.VERCEL) {
  app
    .listen(PORT, "0.0.0.0", () => {
      console.warn(`Server is running on port ${PORT}`);
    })
    .on("error", (err) => {
      console.error("Error starting server:", err);
    });
}

// 404 middleware for unknown routes
app.use(notFound);
export default app;
