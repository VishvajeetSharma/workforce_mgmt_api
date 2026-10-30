import "dotenv/config";
import app from "./app";

const PORT = process.env.PORT || 5000;

const startServer = async (): Promise<void> => {
    try {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Server startup failed:", error);
        process.exit(1);
    }
};

startServer();