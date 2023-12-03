import express from "express";
import { getDocuments } from "../controllers/getdocuments.js";
import authenticated from "./authenticated.js";

const router = express.Router();

router.get("/", getDocuments);

export default router;
