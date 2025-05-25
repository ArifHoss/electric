import {Request, Response, Router} from "express";
import User from "../models/User";

const router = Router();

// GET all users
router.get('/', async (req: Request, res: Response) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch users'});
    }
});

// GET one user by ID
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            res.status(404).json({error: 'User not found'});
            return;
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch user'});
    }
});

// CREATE new user
router.post('/', async (req: Request, res: Response) => {
    try {
        const {firstName, lastName, email, password, phone, country, birthDate} = req.body;

        const existingUser = await User.findOne({where:{email}})
        if (existingUser){
        res.status(400).json({error: 'Failed to create user already exist', email});
        return;
        }
        const newUser = await User.create({firstName, lastName, email, password, phone, country, birthDate});
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({error: 'Failed to create user', details: error});
    }
});


// Login
router.post('/login', async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
             res.status(401).json({ error: 'Fel e-post eller lösenord.' });
             return ;
        }

        // Password check (no hashing yet)
        if (user.getDataValue('password') !== password) {
             res.status(401).json({ error: 'Fel e-post eller lösenord.' });
             return;
        }

         res.status(200).json({ name: `${user.getDataValue('firstName')} ${user.getDataValue('lastName')}` });

    } catch (error) {
         res.status(500).json({ error: 'Inloggning misslyckades.' });
    }
});


// UPDATE user by ID
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            res.status(404).json({error: 'User not found'});
            return;
        }
        await user.update(req.body);
        res.json(user);
    } catch (error) {
        res.status(400).json({error: 'Failed to update user', details: error});
    }
});

// DELETE user by ID
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            res.status(404).json({error: 'User not found'});
            return;
        }
        await user.destroy();
        res.json({message: 'User deleted successfully'});
    } catch (error) {
        res.status(500).json({error: 'Failed to delete user'});
    }
});

export default router;