// OrderItemRouter.ts
import { Request, Response, Router } from "express";
import OrderItem from "../models/OrderItem";
import Product from "../models/Product";
import Order from "../models/Order";

const router = Router();

// GET all OrderItems with related Product and Order
router.get("/", async (req: Request, res: Response): Promise<void> => {
    try {
        const orderItems = await OrderItem.findAll({
            include: [
                { model: Product },
                { model: Order }
            ]
        });

        res.json(orderItems);
    } catch (error) {
        console.error("Error fetching order items:", error);
        res.status(500).json({ error: "Failed to fetch order items" });
    }
});

export default router;