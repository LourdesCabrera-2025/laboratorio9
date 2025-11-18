import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", verifyToken, (req, res) => {
    res.json({
        message: `Ruta protegida. Hola ${req.user.email}`
    });
});

export default router;
