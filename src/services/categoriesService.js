import pool from '../database/db.js'

export const getAllCategories = async () => {
    try{
        const [rows, fields] = await pool.query(`SELECT * FROM categoria`);
        return rows;
    }catch(error){
        console.log(error.message | error);
        throw error; 
    }
}

export const getOneCategory = async (id) => {
    try {
        const [rows, fields] = await pool.query(`SELECT * FROM categoria WHERE idCategoria = ?`, [id]);
        return rows
    } catch (error) {
        console.log(error.message | error);
        throw error;
    }
}

export const createCategory = async (nombre) => {
    try {
        
    } catch (error) {
        console.log(error.message | error);
        throw error;
    }
 }

export const updateCategory = async (id, nombre) => {
    try {
        
    } catch (error) {
        console.log(error.message | error);
        throw error;
    }
 }

export const deleteCategory = async (id) => {
    try {
        
    } catch (error) {
        console.log(error.message | error);
        throw error;
    }
 }