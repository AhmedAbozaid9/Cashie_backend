import express from "express";
import authRoutes from "./routes/auth.routes";
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
