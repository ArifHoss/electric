import { Request, Response, Router } from "express";
import Product from "../models/Product";

const router = Router();

// GET all Products
router.get("/", async (req: Request, res: Response) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

export default router;