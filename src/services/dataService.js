import pool from "../database/db.js";

export const getAllData = async () => {
    try {
        const [rows, fields] = await pool.query(`SELECT * FROM datos`);
        return rows
    } catch (error) {
        console.log(error.message || error);
        throw error.message || error;
    }
}

export const getData = async (id) => {
    try {
        const [row] = await pool.query('SELECT * FROM datos WHERE iddatos = ?', [id])
        return (row[0])
    } catch (error) {
        console.log(error.message || error);
        throw error.message || error;
    }    
}

export const createData = async (idTelefono, idLink, idDireccion, idHorarios) => {
    try {
        
    } catch (error) {
        console.log(error.message || error);
        throw error.message || error;
    }
}

export const updateData = async (idTelefono, idLink, idDireccion, idHorarios) => {
    try {
        
    } catch (error) {
        console.log(error.message || error);
        throw error.message || error;
    }
}

export const deleteData = async (idDatos) => {
    try {
        
    } catch (error) {
        console.log(error.message || error);
        throw error.message || error;
    }
}