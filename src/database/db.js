import mysql from 'mysql2'
import dotenv from 'dotenv'
import {MYSQL_DATABASE, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_PORT, MYSQL_USER} from './config.js'
dotenv.config();

export const pool = mysql.createPool({
    host: MYSQL_HOST, 
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    port: MYSQL_PORT
}).promise();


export const getAll = async (tabla)=>{
    try{
        const [rows, fields] = await pool.query(`SELECT * FROM ${tabla}`);
        return rows;
    }catch(e){
        console.log(e.message);
        throw e; // Re-throw the error to handle it elsewhere if needed
    }
}

export async function getRegisterById(tabla,id){
    try{
        const [result] = await pool.query(`SELECT * FROM ${tabla} WHERE id = ?`,[id]);
        return result;
    }catch(e){
        console.log(e.message);
    }
}

export async function createActividad(titulo, descripcion, id, idCategoria, idDatos) {
    try{
        const [row] = await pool.query(`INSERT INTO actividades 
    (titulo, descripcion, id, idCategoria, idDatos)
    VALUES (?,?,?,?,?)
    `, [ titulo, descripcion, id, idCategoria, idDatos]);
    return (row);
    }catch(e){
        console.log(e.message);
    }
}

export async function getActividad(id) {
    const [row] = await pool.query('SELECT * FROM actividades WHERE id = ?', [id])
    return (row[0]);
}

export async function getSubCategoria(id) {
    const [row] = await pool.query('SELECT * FROM subcategoria WHERE idsubcategoria = ?', [id])
    return (row[0]);
}

export async function getDatos(id) {
    const [row] = await pool.query('SELECT * FROM datos WHERE iddatos = ?', [id])
    return (row[0]);
}
export async function getTelefono(id) {
    const [row] = await pool.query('SELECT * FROM telefono WHERE idtelefono = ?', [id])
    return (row[0]);
}

export async function getLink(id) {
    const [row] = await pool.query('SELECT * FROM links WHERE idlinks = ?', [id])
    return (row[0]);
}

export async function getDireccion(id) {
    const [row] = await pool.query('SELECT * FROM direccion WHERE iddireccion = ?', [id])
    return (row[0]);
}

export async function getHorarios(id) {
    const [row] = await pool.query('SELECT * FROM horarios WHERE idhorarios = ?', [id])
    return (row[0]);
}