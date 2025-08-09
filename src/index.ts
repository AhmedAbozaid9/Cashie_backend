import express from "express";
import authRoutes from "./routes/auth.routes.js";
import accountRoutes from "./routes/account.routes.js";
import { auth } from "./middlewares/auth.js";
import { headersMiddleware } from "./middlewares/headers.js";

const app = express();
const PORT = parseInt(process.env.PORT || "8080");

app.use(express.json());
app.use(headersMiddleware);
app.use("/api/auth", authRoutes);
app.use("/api/accounts", auth, accountRoutes);

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

export default app;
