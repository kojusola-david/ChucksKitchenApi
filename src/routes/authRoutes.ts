/**
 * @file Auth Routes
 * @description Defines endpoints for user registration and account verification.
 * Base Path: /api/auth (assuming this is mounted in server.js)
 */

import express from 'express';
import { signup, verify } from '../controllers/authController.js';

const router = express.Router();

// --- Public Routes ---

/** @route POST /auth/signup */
router.post('/signup', signup);

/** @route GET /auth/verify */
router.get('/verify', verify);

export default router;