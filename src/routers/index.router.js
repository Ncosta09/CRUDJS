import { Router } from "express";
import apiRouter from "../routers/api/index.api.js"
import viewRouter from "../routers/views/index.view.js";

const router = Router();

router.use("/api", apiRouter);
router.use("/", viewRouter);

export default router;