/**
 * @file Food Service
 * @description Database abstraction layer for managing menu items.
 * Maps the 'Food_Item' table to JavaScript methods.
 */

import db from '../db.js';

/**
 * SQL Precompiled Statements
 * Prepared once to optimize execution speed and prevent SQL injection.
 */
const insertFood = db.prepare('INSERT INTO Food_Item (name, price) VALUES (?, ?)');
const getAllFood = db.prepare('SELECT * FROM Food_item');

/**
 * Food Service Interface
 */
const foodService = {
  /**
   * Adds a new food item to the menu.
   * * @param {string} name - The display name of the food (e.g., 'Jollof Rice').
   * @param {number} price - The unit price in the local currency.
   * @returns {Object} { changes: number, lastInsertRowid: number }
   * @throws {SqliteError} If the name is null or violates a UNIQUE constraint.
   */
  create(name: string, price: number) {
    return insertFood.run(name, price);    
  },
  
  /**
   * Retrieves all available food items from the database.
   * * @returns {Array<Object>} List of food items: [{ id, name, price }, ...]
   * @example
   * const menu = foodService.findAll();
   */
  findAll() {
    return getAllFood.all();
  }
};

export default foodService;