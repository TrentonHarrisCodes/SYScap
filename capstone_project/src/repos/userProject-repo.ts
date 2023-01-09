import IUserFormContent from "@models/FormContent";
import IUserProject from "@models/UserProject";
import IUserProfile from "@models/UserProfile";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getAllUserProjects(): Promise<IUserProject[]> {
  return await prisma.userProject.findMany({
    include: {
      userFormContent: true,
    },
  });
}

async function savedProject(
  userProject: IUserProject,
  userProfileId: string
): Promise<IUserProject|IUserProfile> {
  return await prisma.userProject.create({
    include: {
      userFormContent: true,
    },
    data: {
      projectName: userProject.projectName,
      projectType: userProject.projectType,
      formName: userProject.formName,
      formType: userProject.formtype,
      description: userProject.description,
      notes: userProject.notes,
      totalPrice: userProject.totalPrice,
      projectQuote: userProject.projectQuote,
  projectQuoteTotal: userProject.projectQuoteTotal,
      
      timeCreated: new Date(),
      timeDue: userProject.timeDue,
      projectRecipient: userProject.projectRecipient,
      projectAccepted: userProject.projectAccepted,
      userProfileId: userProfileId,
    },
  });
}
async function deleteProject(id: string): Promise<void>{
await prisma.userProject.delete({
    include:{
        userFormContent: true,
    },
    where:{
        id: id
    }

})


}

async function updateProject(userProject:IUserProject): Promise<IUserProject| null>{

    const updatedProject =await prisma.userProject.update({
       where:{
         id: userProject.id
       },
        data:{
          projectName: userProject.projectName,
          projectType: userProject.projectType,
          formName: userProject.formName,
          formType: userProject.formtype,
          description: userProject.description,
          notes: userProject.notes,
          totalPrice: userProject.totalPrice,
          projectQuote: userProject.projectQuote,
  projectQuoteTotal: userProject.projectQuoteTotal,
          
          timeCreated: new Date(),
          timeDue: userProject.timeDue,
          projectRecipient: userProject.projectRecipient,
          projectAccepted: userProject.projectAccepted,
          
      

        }

    })
    return updatedProject
}

async function getProjectByUser(userProfileId: string): Promise <IUserProject[]>{
  const foundUserProject = await prisma.userProject.findMany({

    include:{
      userFormContent: true
    },
    where:{
       userProfileId: userProfileId
    }

  })
  return foundUserProject
}

async function getProjectByAllUser(userProfileId: string, projectRecipient: string): Promise <IUserProject[]>{
  const foundUserProject = await prisma.userProject.findMany({

    include:{
      userFormContent: true
    },
    where:{
      OR:[
        {userProfileId: userProfileId},
        {projectRecipient: projectRecipient}
      ]
       
    }

  })
  return foundUserProject
}

async function getProjectById(id: string): Promise <IUserProject| null>{
  const foundUserProject = await prisma.userProject.findUnique({

    include:{
      userFormContent: true
    },
    where:{
       id: id
    }

  })
  return foundUserProject
}





export default {
  getAllUserProjects,
  savedProject,
  deleteProject,
  updateProject,
  getProjectByUser,
  getProjectByAllUser,
  getProjectById
};
