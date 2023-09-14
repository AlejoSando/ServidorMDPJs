import pool from "../database/db.js";

export const getAllActivities = async () => {
  try {
    const [rows, fields] = await pool.query(`SELECT * FROM actividades`);
    return rows;
  } catch (e) {
    console.log(e.message);
    throw e;
  }
};

export const getOneActivityById = async id => {
  try {
    const [
      result
    ] = await pool.query(`SELECT * FROM actividades WHERE id = ?`, [id]);
    return result;
  } catch (e) {
    console.log(e.message);
  }
};

async function createActivity(
  titulo,
  descripcion,
  id,
  idSubCategoria,
  idDatos
) {
  try {
    const [row] = await pool.query(
      `INSERT INTO actividades 
    (titulo, descripcion, id, idSubCategoria, idDatos)
    VALUES (?,?,?,?,?)
    `,
      [titulo, descripcion, id, idSubCategoria, idDatos]
    );
    return row;
  } catch (e) {
    console.log(e);
  }
}

async function updateActivity(
  titulo,
  descripcion,
  id,
  idSubCategoria,
  idDatos
) {
  try {
  } catch (error) {
    console.log(error);
  }
}

async function deleteActivityById(id) {
  try {
  } catch (error) {
    console.log(error);
  }
}

async function getDatos(id) {
  const [row] = await pool.query("SELECT * FROM datos WHERE iddatos = ?", [id]);
  return row[0];
}

async function getTelefono(id) {
  const [
    row
  ] = await pool.query("SELECT * FROM telefono WHERE idtelefono = ?", [id]);
  return row[0];
}

async function getLink(id) {
  const [row] = await pool.query("SELECT * FROM links WHERE idlinks = ?", [id]);
  return row[0];
}

async function getDireccion(id) {
  const [
    row
  ] = await pool.query("SELECT * FROM direccion WHERE iddireccion = ?", [id]);
  return row[0];
}

async function getHorarios(id) {
  const [
    row
  ] = await pool.query("SELECT * FROM horarios WHERE idhorarios = ?", [id]);
  return row[0];
}
