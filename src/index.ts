import express from "express";
import authRoutes from "./routes/auth.routes";
import accountRoutes from "./routes/account.routes";
import { auth } from "./middlewares/auth";

const app = express();
const PORT = parseInt(process.env.PORT || "8080");

app.use(express.json());

import { headersMiddleware } from "./middlewares/headers";

app.use(headersMiddleware);

app.use("/api/auth", authRoutes);
app.use("/api/accounts", auth, accountRoutes);

if (process.env.ENV !== "production") {
  app
    .listen(PORT, "0.0.0.0", () => {
      console.warn(`Server is running on port ${PORT}`);
    })
    .on("error", (err) => {
      console.error("Error starting server:", err);
    });
}

export default app;
