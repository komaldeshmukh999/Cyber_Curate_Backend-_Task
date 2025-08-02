import express from "express";
import { createStaff, getAllStaff } from "../controllers/staffController.js";

const router = express.Router();

 router.post("/create", createStaff);
router.get("/", getAllStaff);

export default router;
