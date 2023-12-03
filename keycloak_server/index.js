import express from "express";
import dotenv from "dotenv";
import documentsRoutes from "./routes/documentRoutes.js";
import authenticated from "./routes/authenticated.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use("/documents", authenticated, documentsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
