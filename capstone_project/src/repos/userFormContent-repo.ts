import IUserFormContent from "@models/FormContent";
import IUserProject from "@models/UserProject";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getAllUserFormContents(): Promise<IUserFormContent[]> {
  return await prisma.userFormContent.findMany({
   
  });
}


async function saveUserFormContent(
  userFormContent: IUserFormContent,
  userProjectId: string
): Promise<IUserFormContent> {
  return await prisma.userFormContent.create({
    data: {
      serviceName: userFormContent.serviceName,
      serviceType: userFormContent.serviceType,
      serviceDescription: userFormContent.serviceDescription,
      servicePer: userFormContent.servicePer,
      servicePrice: userFormContent.servicePrice,
      serviceRate: userFormContent.serviceRate,
      servicePriceTotal: userFormContent.servicePriceTotal,
      userProjectId: userProjectId,
    },
   
  });
}

async function updateUserFormContent(
  userFormContent: IUserFormContent
): Promise<IUserFormContent> {
  const updateUserFormContent = await prisma.userFormContent.update({
    where: {
      id: userFormContent.id,
    },
    data: {
      serviceName: userFormContent.serviceName,
      serviceType: userFormContent.serviceType,
      serviceDescription: userFormContent.serviceDescription,
      servicePer: userFormContent.servicePer,
      servicePrice: userFormContent.servicePrice,
      serviceRate: userFormContent.serviceRate,
      servicePriceTotal: userFormContent.servicePriceTotal,
    },
   
  });
  return updateUserFormContent;
}
async function deleteUserFormContent(id: string): Promise<void> {
  await prisma.userFormContent.delete({
    where: {
      id: id,
    },
  });
}
async function getUserFormByProject( userProjectId:string): Promise<IUserFormContent[]> {
  const usersFormContent = await prisma.userFormContent.findMany({
    where:{
      userProjectId: userProjectId
    }
  })
  return usersFormContent
  
}

export default {
  getAllUserFormContents,
  saveUserFormContent,
  updateUserFormContent,
  deleteUserFormContent,
  getUserFormByProject
} as const;
