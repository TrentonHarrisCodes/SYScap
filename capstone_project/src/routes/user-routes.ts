import { Request, Response, Router } from "express";
import userService from "@services/user-service";
import { StatusCodes } from "http-status-codes";

const router =Router()
const {CREATED, OK, BAD_REQUEST} = StatusCodes

router.get('/getAllUsers', async (req: Request, res: Response)=>{

    const allUsers =await userService.getAllUsers()
    return res.status(OK).json({users: allUsers})
})


router.post('/signUpUser',async (req:Request, res: Response) => {
const {user} = req.body
const savedUser = await userService.saveUser(user) 
return res.status(CREATED).json({user: savedUser})   
})



router.post('/signInUser',async (req:Request, res: Response) => {
  const {user} = req.body 
  const signedInUser = await userService.signInUser(user)
  if (signedInUser === null){
    return res.status(BAD_REQUEST).json({message:"The email and password combination does not exist"})
  }
  return res.status(OK).json({user: signedInUser})
  
  



  
})

router.get('/getUserByEmail/:email',async (req:Request, res: Response) => {
    const {email} =req.params
    const signedInUser = await userService.getUserByEmail(email)
    if (signedInUser === null){
        return res.status(BAD_REQUEST).json({message:"This email does not exist"})
    }
    return res.status(OK).json({user: signedInUser})
})


router.get('/getUserByUserName/:userName',async (req:Request, res: Response) => {
    const {userName} =req.params
    const signedInUser = await userService.getUserByUserName(userName)
    if (signedInUser === null){
        return res.status(BAD_REQUEST).json({message:"This username does not exist"})
    }
    return res.status(OK).json({user: signedInUser})
})


router.put('/updateUser',async (req: Request, res: Response) => {
    const {user} =req.body
    const updateUser = await userService.updateUser(user)
    if(updateUser === null){
        return res.status(BAD_REQUEST).json({message:"user's id not found"})
    }
    return res.status(CREATED).json({user: updateUser})
})

router.get('/getUserById/:id',async (req:Request, res: Response) => {
const {id} = req.params
const getUserById = userService.getUserById(id);
if(getUserById === null){
    res.status(BAD_REQUEST).json({message:"user id does not exist"})
}   
return res.status(OK).json({user: getUserById}) 
})




export default router;