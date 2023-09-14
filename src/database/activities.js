import pool from './db.js'

export const getAllActivities = async () =>{
    try{
        const [rows, fields] = await pool.query(`SELECT * FROM actividades`);
        return rows;
    }catch(e){
        console.log(e.message || e);
        throw e.message || e;
    }
}

export async function getOneActivity(id){
    try{
        const [result] = await pool.query(`SELECT * FROM actividades WHERE id = ?`,[id]);
        return result;
    }catch(e){
        console.log(e.message || e);
        throw e.message || e;
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
        console.log(e.message || e);
        throw e.message || e;
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

export const getAllDataById = async (id) => {
    try {
      const actividad = await getActividad(id);
      const subCategoria = await getSubCategoria(actividad.idCategoria);
      const datos = await getDatos(actividad.idDatos);
      const telefono = await getTelefono(datos.idTelefono);
      const link = await getLink(datos.idLinks);
      const direccion = await getDireccion(datos.idDireccion);
      const horarios = await getHorarios(datos.idHorarios);
  
      const result = {
        actividad,
        subCategoria,
        datos,
        telefono,
        link,
        direccion,
        horarios,
      };
  
      return result;
    } catch (e) {
      console.log(e.message);
      throw e;
    }
  }
  
  export async function getAllActivitiesWithDetails() {
    try {
      const allActivities = await getAllActivities();
  
      const activitiesWithDetails = await Promise.all(
        allActivities.map(async (activity) => {
          const subCategoria = await getSubCategoria(activity.idCategoria);
          const datos = await getDatos(activity.idDatos);
          const telefono = await getTelefono(datos.idTelefono);
          const link = await getLink(datos.idLinks);
          const direccion = await getDireccion(datos.idDireccion);
          const horarios = await getHorarios(datos.idHorarios);
  
          return {
            actividad: activity,
            subCategoria: subCategoria,
            datos: datos,
            telefono: telefono,
            link: link,
            direccion: direccion,
            horarios: horarios,
          };
        })
      );
  
      return activitiesWithDetails;
    } catch (e) {
      console.log(e.message);
      throw e;
    }
  }