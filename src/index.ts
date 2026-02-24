/**
 * @file Entry Point
 * @description Main server configuration for the application.
 * Sets up middleware, environment variables, and mounts top-level routes.
 */

import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/authRoutes.js';

// Load environment variables from .env file
dotenv.config();

/**
 * Server Configuration
 * Priority is given to the environment variable
 * falls back to 3000 for local development.
 */
const PORT = process.env.PORT || 3000;
const app = express();

// --- Global Middleware ---

/** * Body Parser: Recognizes the incoming Request Object as a JSON Object.
 * Required for POST/PUT requests where data is sent in the body.
 */
app.use(express.json()); 

// --- Route Mounting ---

/** * Auth Router: Handles registration, login, and verification.
 * Note: Consider prefixing with '/api/v1' for better version control later.
 */
app.use(authRouter);

/**
 * @route GET /
 * @description Health check/Root endpoint to verify server status.
 */
app.get('/', (req, res) => {
    res.send('Hello');
});

/**
 * Server Execution
 */
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});