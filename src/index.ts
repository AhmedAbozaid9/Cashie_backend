import express from "express";
import authRoutes from "./routes/auth.routes";
const app = express();
const PORT = parseInt(process.env.PORT || "8080");

app.use(express.json());

app.use("/api/auth", authRoutes);

app
  .listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
  })
  .on("error", (err) => {
    console.error("Error starting server:", err);
  });
