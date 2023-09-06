import express from 'express';
import cors from 'cors'
import { getActividad, getAll, getDatos, getDireccion, getHorarios, getLink, getSubCategoria, getTelefono } from './database/db.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json())
app.use(cors())


app.get("/actividades", async (req, res) => {
    try {
        const data = await getAll("actividades")
        res.json(data)
    } catch (error) {
        res.status(500).json({ error: "An error occurred" }); 
    }
});
app.get("/categoria", async (req, res) => {
    try {
        const data = await getAll("categoria")
        res.json(data)
    } catch (error) {
        res.status(500).json({ error: "An error occurred" }); 
    }
});
app.get("/actividad/:id", async (req, res) => {
    try {
        const data = await getActividad(req.params.id)
        const data1 = await getSubCategoria(data.idSubCategoria)
        const data2 = await getDatos(data.idDatos)
        const data3 = await getTelefono(data2.idTelefono)
        const data4 = await getLink(data2.idLink)
        const data5 = await getDireccion(data2.idDireccion)
        const data6 = await getHorarios(data2.idHorarios)
        const result = {...data, ...data1,...data2,...data3,...data4,...data5,...data6}
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error: "An error occurred" }); 
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

