
import mediaServices from "@services/media-services";
import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";



const router =Router()
const {CREATED, OK, BAD_REQUEST} = StatusCodes

router.get('/getAllMedia', async(req: Request, res: Response)=>{
    const getAllMedia = await mediaServices.getAllmedia()
    return res.status(OK).json({media: getAllMedia})

})

router.post('/createMedia/:userProfileId',async (req:Request, res: Response) => {
    const {media} = req.body
    const {mediaId} =req.params

    if (media === undefined){
        return res.status(BAD_REQUEST).json({message:"Parameters do not exist for this media"})
    }
    const savedMedia = await mediaServices.savedMedia(media,mediaId)
    return res.status(CREATED).json({media: savedMedia})

})

router.delete('/deleteMedia/:id',async (req:Request,res: Response) => {
    
    const {id} = req.params
    const deleteMedia = await mediaServices.deleteMedia( id)
    if(deleteMedia === null) {
        return res.status(BAD_REQUEST).json({message:"This Media does not exist"})
        
    }
    return res.status(OK).json({message:"Form Deleted"})
    
})


router.put('/updateMedia',async (req:Request, res:Response) => {
    const {media} = req.body
    const updateMedia =await mediaServices.updateMedia(media)
    if (updateMedia === null){
        return res.status(BAD_REQUEST).json({message:"Media does not exist"})

    }
return res.status(CREATED).json({media: updateMedia})
    
})
    







export default router