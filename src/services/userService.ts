import db from '../db.js';

/**
 * Precompiled SQL statement for user registration.
 * Using a prepared statement prevents SQL injection and improves performance 
 * for repeated insertions.
 */
const signup = db.prepare(
  'INSERT INTO User (role, name, email, password_hash, referral_code) VALUES (?, ?, ?, ?, ?)'
);

/**
 * Service layer for User-related database operations.
 * Decouples the database logic from the route handlers.
 */
const userService = {
  /**
   * Registers a new user in the system.
   * @param {string} role - The user's permission level (e.g., 'admin', 'player').
   * @param {string} name - Full name of the user.
   * @param {string} email - Unique email address for login.
   * @param {string} password_hash - The argon2/bcrypt hashed password.
   * @param {string | null} [referral_code=null] - Optional code for tracking referrals.
   * @returns {Object} Result object containing `changes` (rows affected) and `lastInsertRowid`.
   * @throws {SqliteError} If the email already exists or a constraint is violated.
   */
  create(
    role: string, 
    name: string, 
    email: string, 
    password_hash: string, 
    referral_code: string | null = null
  ) {
    // Explicitly handle null for the referral_code to ensure DB consistency
    return signup.run(
      role, 
      name, 
      email, 
      password_hash, 
      referral_code ? referral_code : null
    );    
  }
}

export default userService;