import { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import userFormContentServices from "@services/userFormContent-service";


const router = Router()
const {CREATED,OK,BAD_REQUEST} =StatusCodes

router.get('/getAllUserFormContents', async (req:Request, res: Response) => {
    const getAllUserFormContents = await userFormContentServices.getAllUserFormContents()
    return res.status(OK).json({userFormContent: getAllUserFormContents})
    
})

router.post ('/createUserFormContent/:userProjectId',async (req:Request,res:Response) => {
    const{userFormContent} =req.body
    const{userProjectId} = req.params
    if(userFormContent === undefined){
        return res.status(BAD_REQUEST).json({message: "Parameters do no exist for this content"})
    }
    const saveUserFormContent = await userFormContentServices.saveUserFormContent(userFormContent, userProjectId)
    return res.status(CREATED).json({userFormContent: saveUserFormContent})
})
router.put('/updateUserFormContent',async (req:Request, res:Response) => {
    const {userFormContent}= req.body
    const updateUserFormContent = await userFormContentServices.updateUserFormContent(userFormContent)
    if(updateUserFormContent === null){
        return res.status(BAD_REQUEST).json({message: "Form does not exist"})
    }
    return res.status(CREATED).json({userFormContent: updateUserFormContent})
})

router.get('/getUserFormByProject/:userProjectId', async (req:Request, res: Response) => {
    const {userProjectId} =req.params
    
    const getUserFormByProject = await userFormContentServices.getUserFormByProject( userProjectId)
    if(getUserFormByProject === null){
        return res.status(BAD_REQUEST).json({message: "Form does not exist"})
    }
    return res.status(OK).json({userFormContent: getUserFormByProject})
    
})

router.delete('/deleteUserFormContent/:id',async (req:Request, res: Response) => {
        const {id}= req.params 
        const deleteUserFormContent =await userFormContentServices.deleteUserFormContent(id)
        if (deleteUserFormContent === null){
            return res.status(BAD_REQUEST).json({message:"Form content does not exist"})
        }
        return res.status(OK).json({message:"Form Content Deleted"})
})

export default router