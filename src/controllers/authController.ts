import type{ Request, Response } from 'express';
import userService from '../services/userService.js';
import bcrypt from 'bcrypt';

/**
 * Handles signup logic
 * @param req 
 * @param res 
 * @returns {Response} 201 Created - Returns the user's name as confirmation
 */
export const signup = async(req: Request, res: Response) => {

    const { role, name, email, password, referral_code } = req.body;
    const password_hash = await bcrypt.hash(password, 10)

    userService.create(role, name, email, password_hash, referral_code);
    res.status(201).json({name: name})
}

/**
 * Handles verification logic
 * @param req 
 * @param res 
 * @returns {Response} 200 Ok - Returns the message 'Done'
 */
export const verify = async(req: Request, res: Response) => {
    const token = req.query.token?.toString();
    console.log(token);
    res.status(200).json({message: "Done"})
    
}

// NOT COMPLETE