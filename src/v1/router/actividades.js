import express from 'express'
import { getAll } from '../../database/db'
const router = express.Router()

router
    .get("/actividad/:Idactivity")
    .get("/actividades", getAll("actividades"))
    .post("/create/actividades")
    .patch("/update/:Idactivity")
    .delete("/delete/:Idactivity")

    module.exports = {
        router
    }