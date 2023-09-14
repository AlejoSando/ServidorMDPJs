import pool from '../database/db.js'

export const getAllSubCategories = async () => {
    try{
        const [rows, fields] = await pool.query(`SELECT * FROM subcategoria`);
        return rows;
    }catch(error){
        console.log(error.message | error);
        throw error; 
    }
}

export const getSubCategory = async (id) => {
    try {
        const [row] = await pool.query('SELECT * FROM subcategoria WHERE idsubcategoria = ?', [id])
        return (row[0]);
    } catch (error) {
        console.log(error.message | error)
        throw error
    }
}

export const createSubCategory = async (nombre,idCategoria) => {
    try {
        
    } catch (error) {
        console.log(error.message | error)
        throw error
    }
 }

export const updateSubCategory = async (id,nombre, idCategoria) => {
    try {
        
    } catch (error) {
        console.log(error.message | error)
        throw error
    }
}

export const deleteSubCategory = async (id) => {
    try {
        
    } catch (error) {
        console.log(error.message | error)
        throw error
    }
}