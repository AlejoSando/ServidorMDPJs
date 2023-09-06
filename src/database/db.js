import mysql from 'mysql2'
import dotenv from 'dotenv'
/**
 * Configuración para cargar variables de entorno desde el archivo .env
 */
dotenv.config();

/**
 * Pool de conexiones a la base de datos MySQL
 */
export const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
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
