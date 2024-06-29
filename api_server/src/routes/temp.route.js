import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.route("/regseller").post(asyncHandler());
router.route("/addproduct").post(asyncHandler());

export default router;
