import IAddress from "@models/Address";
import addressRepo from "@repos/address-repo";

function getAllAddresses(): Promise<IAddress[]>{
    return addressRepo.getAllAddresses()
    
}

function saveAddress(address:IAddress, addressId: string): Promise<IAddress>{
    return addressRepo.saveAddress(address,addressId)
}
function deleteAddress(id: string): Promise<void>{
    return addressRepo.deleteAddress(id)
}
function updateAddress (address:IAddress): Promise <IAddress| null>{
    return addressRepo.updateAddress(address)
}


export default{
    getAllAddresses,
    saveAddress,
    deleteAddress,
    updateAddress
} as const