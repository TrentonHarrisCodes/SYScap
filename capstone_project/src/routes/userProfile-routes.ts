import {Router,Request,Response} from 'express'
import StatusCodes from 'http-status-codes'
import userProfileServices from '@services/userProfile-services'
import IUserForm from '@models/UserProject'
import IAddress from '@models/Address'
import { RequestPage } from '@mui/icons-material'

const cloudinary= require('@shared/cloudinary')
const  router = Router()
const {CREATED, OK, BAD_REQUEST} = StatusCodes


router.get('/getAllUserProfiles',async (req:Request, res: Response) => {
 const allUserProfiles = await userProfileServices.getAllUserProfiles()
 return res.status(OK).json({userProfile:allUserProfiles})
})





router.post('/createUserProfile/:userId',async (req:Request, res:Response) => {
  const{userProfile} =  req.body
  const{userId} = req.params 

  
  if(userProfile=== undefined){
    return res.status(BAD_REQUEST).json({message: "Parameters do no exist for this user"})
  }
  const saveUserProfile = await userProfileServices.saveUserProfile(userProfile, userId)
  return res.status(CREATED).json({userProfile: saveUserProfile})

})

router.put('/updateUserProfile', async(req: Request, res:Response )=>{
const {userProfile}= req.body


const updateUserProfile = await userProfileServices.updateUserProfile(userProfile)
if (updateUserProfile===null){
  return res.status(BAD_REQUEST).json({message:"userProfile cannotbe found"} )
}
return res.status(CREATED).json({userProfile: updateUserProfile})


}
)

export default router