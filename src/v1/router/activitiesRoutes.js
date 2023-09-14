import express from 'express'
import * as actividad from '../../controller/activitiesController.js'
export const router = express.Router()

router
    .get("/actividad/:idActivity", actividad.getActivity)
    .get("/actividades", actividad.getAllActivities)
    .post("/create/actividades", actividad.createNewActivity)
    .patch("/update/:Idactivity", actividad.updateActivity)
    .delete("/delete/:Idactivity", actividad.deleteActivity)

export default router