import express, { type Express } from "express";

const app: Express = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "API is running....."
    });
});

export default app;