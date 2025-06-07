import {Request, Response, Router} from "express";
import Product from "../models/Product";

const router = Router();

// CREATE a new product
router.post("/", async (req: Request, res: Response) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(400).json({error: "Failed to create product"});
    }
});

// READ all products
router.get("/", async (_req: Request, res: Response) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({error: "Failed to fetch products"});
    }
});

// READ a single product by ID
router.get("/:id", async (req: Request, res: Response) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            res.status(404).json({error: "Product not found"});
            return;
        }
        res.json(product);
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({error: "Failed to fetch product"});
    }
});

// UPDATE a product by ID
router.put("/:id", async (req: Request, res: Response) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            res.status(404).json({error: "Product not found"});
            return
        }

        await product.update(req.body);
        res.json(product);
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(400).json({error: "Failed to update product"});
    }
});

// DELETE a product by ID
router.delete("/:id", async (req: Request, res: Response) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            res.status(404).json({error: "Product not found"});
            return
        }

        await product.destroy();
        res.status(204).send();
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({error: "Failed to delete product"});
    }
});

export default router;