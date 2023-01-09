import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import addressServices from "@services/address-service";

const router =Router()
const {CREATED,OK,BAD_REQUEST}= StatusCodes

router.get('/getAllAddresses',async (req:Request, res: Response) => {
    const allAddresses = await addressServices.getAllAddresses()
    return res.status(OK).json({address:allAddresses})
    
})
router.post('/createAddress/:addressId',async (req:Request, res: Response) => {
    const {address} = req.body
    const {addressId}= req.params
    if(address === undefined){
        res.status(BAD_REQUEST).json({message:"Parameters are not correct for this address"})
    }
    const saveAddress =await addressServices.saveAddress(address,addressId)
    return res.status(CREATED).json({address: addressId})
})

router.delete('/deleteAddress/:id',async (req:Request, res: Response) => {
    const {id} =req.params
    const deleteAddress = await addressServices.deleteAddress(id)
    if (deleteAddress === null){
        return res.status(BAD_REQUEST).json({message: "This address does not exist"})
    }
    return res.status(OK).json({message:"Address Deleted"})
})

router.put('updateAddress',async (req:Request, res: Response) => {
    const {address} =req.body
    const updateAddress =await addressServices.updateAddress(address)
    if(updateAddress === null){
        return res.status(BAD_REQUEST).json({message:"Address does not exist"})
    }
    return  res.status(CREATED).json({address: updateAddress})
})







export default router