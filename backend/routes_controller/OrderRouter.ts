import {Request, Response, Router} from "express";
import Order from "../models/Order";
import User from "../models/User";

const router = Router();

// GET all Orders
router.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const orders = await Order.findAll({
            include: [{model: User, attributes: ['id', 'firstName', 'lastName', 'email']}],
        });
        res.json(orders);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch order'});
    }
});


export default router;