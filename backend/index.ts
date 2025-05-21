import express from "express";
import cors from "cors";
import sequelize from './sequelize'
import UserRoutes from './routes_controller/UserRoutes';
import './models/User';



const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/users', UserRoutes);

const start = async () => {
    try {
        await sequelize.sync({ alter: true });
        app.listen(PORT, () => {
            console.log(`SERVER IS UPP AND RUNNING ON: ${PORT}`);
        });
    } catch (error) {
        console.error(error);
    }
};

start().catch((err) => {
    console.error('Failed to start server:', err);
});
