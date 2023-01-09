import IAddress from "@models/Address";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getAllAddresses(): Promise<IAddress[]> {
  return await prisma.address.findMany({});
}

async function saveAddress(
  address: IAddress,
  addressId: string
): Promise<IAddress> {
  return await prisma.address.create({
    data: {
      streetNumber: address.streetNumber,
      streetName: address.streetName,
      cityName: address.cityName,
      state: address.state,
      zipcode: Number(address.zipcode),
      addressId: addressId,
    },
  });
}
async function deleteAddress(id:string):Promise<void> {
    await prisma.address.delete({
        where:{
            id: id
        }
    })
    
}

async function updateAddress(address: IAddress): Promise<IAddress|null>{
    const updateAddress = await prisma.address.update({

        where:{
            id: address.id
        },
        data:{
            streetNumber: address.streetNumber,
            streetName: address.streetName,
            cityName: address.cityName,
            state: address.state,
            zipcode: address.zipcode,


        }
    })
    return updateAddress
}

export default {
  getAllAddresses,
  saveAddress,
  deleteAddress,
  updateAddress
};
