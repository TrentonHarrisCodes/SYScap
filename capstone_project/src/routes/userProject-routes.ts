import userProjectService from "@services/userProject-service"

import { Request, Response, Router } from "express"
import { StatusCodes } from "http-status-codes"

const  router = Router()
const {CREATED, OK, BAD_REQUEST} = StatusCodes


router.get('/getAllUserProjects',async (req:Request, res: Response) => {
    const getAllUserProjects = await userProjectService.getAllUserProjects()
    return res.status(OK).json({userProject:getAllUserProjects})

})

router.post('/createProject/:userProfileId',async (req:Request, res: Response) => {
    const {userProject} = req.body
    const {userProfileId} =req.params
    console.log(req.body)

    if (userProject === undefined){
        return res.status(BAD_REQUEST).json({message:"Parameters do not exist for this project"})
    }
    const savedProject = await userProjectService.savedProject(userProject,userProfileId)
    return res.status(CREATED).json({userProject: savedProject})
    
})

router.delete('/deleteProject/:id',async (req:Request,res: Response) => {
    
    const {id} = req.params
    const deleteProject = await userProjectService.deleteProject( id)
    if(deleteProject === null) {
        return res.status(BAD_REQUEST).json({message:"This project does not exist"})
        
    }
    return res.status(OK).json({message:"Form Deleted"})
    
})

router.put('/updateProject',async (req:Request, res:Response) => {
    const {userProject} = req.body
    const updateProject =await userProjectService.updateProject(userProject)
    if (updateProject === null){
        return res.status(BAD_REQUEST).json({message:"Form does not exist"})

    }
return res.status(CREATED).json({userProject: updateProject})
    
})

router.get('/getProjectbyUser/:userProfileId',async (req:Request, res:Response) => {
    const {userProfileId} =req.params
    const getProjectbyUser = await userProjectService.getProjectByUser(userProfileId)
    if(getProjectbyUser === null){
        res.status(BAD_REQUEST).json({message:"user's Project does not exist"})
    }
   return res.status(OK).json({userProject: getProjectbyUser}) 
})

router.get('/getProjectbyUserandEmail/:userProfileId/:userProjectRecipeint',async (req:Request, res:Response) => {
    const {userProfileId } =req.params
    const {userProjectRecipeint} =req.params
    const getProjectbyAllUser = await userProjectService.getProjectByAllUser(userProfileId ,userProjectRecipeint)
    if(getProjectbyAllUser === null){
        res.status(BAD_REQUEST).json({message:"user's Project does not exist"})
    }
   return res.status(OK).json({userProject: getProjectbyAllUser}) 
})

router.get('/getProjectbyId/:id',async (req:Request, res:Response) => {
    const {id} =req.params

    const getProjectbyId = await userProjectService.getProjectById(id)
    if(getProjectbyId === null){
        res.status(BAD_REQUEST).json({message:"user's Project does not exist"})
    }
   return res.status(OK).json({userProject: getProjectbyId}) 
})





export default router