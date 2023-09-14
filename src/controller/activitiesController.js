import * as activitiesService from '../services/activitiesServices.js'

export const getAllActivities = async (req,res) => {
    try {
        const allActivities = await activitiesService.getAllActivities()
        res.send({status: "OK", data: {allActivities}})
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({status: "Failed", data: {error: error?.message || error}})
    }
}  

export const getActivity = async (req,res) => {
    try {
        const activity = await activitiesService.getOneActivityById(req.params.idActivity)
        res.send({status: "OK", data: {activity}})
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({status: "Failed", data: {error: error?.message || error}})
    }
}

export const createNewActivity = async (req,res) => {
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

export const updateActivity = async (req,res) => {
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

export const deleteActivity = async (req,res) => {
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