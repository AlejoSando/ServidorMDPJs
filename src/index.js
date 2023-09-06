import express from 'express';
import { getAll } from './database/db.js';

const app = express();
const PORT = process.env.PORT || 3000;


app.get("/actividad", async (req, res) => {
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
app.get("/actividad", async (req, res) => {
    try {
        const data = await getAll("subCategoria")
        res.json(data)
    } catch (error) {
        res.status(500).json({ error: "An error occurred" }); 
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

