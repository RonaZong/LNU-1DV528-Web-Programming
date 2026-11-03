import app from './src/express.mjs'
// import { connectDB } from './src/db/mongoose.mjs';

// connectDB();

try {
    const PORT = process.env.PORT || 3000;
    app(PORT)
} catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
}