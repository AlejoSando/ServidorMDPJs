import express from 'express'
import * as actividad from '../../controller/activitiesController.js'
export const router = express.Router()

router
    .get("/actividad/:Idactivity", actividad.getAllActivities)
    .get("/actividades", actividad.getAllActivities)
    .post("/create/actividades")
    .patch("/update/:Idactivity")
    .delete("/delete/:Idactivity")

export default router