import express from "express";
import pathCTRL from "../controllers/path.controller.js";

const router = express.Router();

router.route("/:mypath").get(pathCTRL.apiGetPath);

export default router;
