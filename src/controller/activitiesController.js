import * as activitiesService from '../services/activitiesServices.js'

export const getAllActivities = (req,res) => {
    try {
        const allActivities = activitiesService.getAllActivities()
        res.send({status: "OK", data: {allActivities}})
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({status: "Failed", data: {error: error?.message || error}})
    }
}  

const getActivity = (req,res) => {
    try {
        const activity = activitiesService.getOneActivityById(req.body.id)
        res.send({status: "OK", data: {activity}})
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({status: "Failed", data: {error: error?.message || error}})
    }
}

const createNewActivity = (req,res) => {
    const { body } = req
    if(!body.id || !body){
        res
            .status(400)
            .send({status: "FAILED", data:{error:"data is missing or is empty in request body"}})
    }
    try {

    } catch (error) {
        res
            .status(error?.status || 500)
            .send({status: "FAILED", data:{error: error?.message || error}})
    }
}

const updateActivity = (req,res) => {
    const { body } = req
    if(!body.id || !body){
        res
            .status(400)
            .send({status: "FAILED", data:{error:"data is missing or is empty in request body"}})
    }
    try {
        const updatedActivity = activitiesService.updateActivity(body)
        res
        .send({status: "OK", data: updatedActivity})
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({status: "FAILED", data:{error: error?.message || error}})
    }
}

const deleteActivity = (req,res) => {
    const { body } = req
    if (!body.id){
        res
            .status(400)
            .send({status: "FAILED", data:{error: "Missing data to delete"}})
    }
    try {
        const deleteLog = activitiesService.deleteActivityById(body.id)
            res
            .status(200)
            .send({status: "OK", data: deleteLog})
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({status: "FAILED", data:{error: error?.message || error}})
    }
}

const prueba = (req,res) => {
    const prueba = req.params
    res
        .status(200)
        .send({status: "OK", data: prueba})
}

