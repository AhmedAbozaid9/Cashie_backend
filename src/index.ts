import express from "express";
import authRoutes from "./routes/auth.routes";
import accountRoutes from "./routes/account.routes";
import { auth } from "./middlewares/auth";

const app = express();
const PORT = parseInt(process.env.PORT || "8080");

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api/accounts", auth, accountRoutes);

app
  .listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
  })
  .on("error", (err) => {
    console.error("Error starting server:", err);
  });
