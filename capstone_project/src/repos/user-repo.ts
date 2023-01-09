import IUser from "@models/User";
import { PrismaClient } from "@prisma/client";
import { userInfo } from "os";

const prisma = new PrismaClient();

async function getAllUsers(): Promise<IUser[]> {
  return await prisma.user.findMany({
    include:{
      userProfile: true
    }
  });
}

async function saveUser(user: IUser): Promise<IUser> {
  return await prisma.user.create({
    include:{
      userProfile: true
    },
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      password: user.password,
      role: user.role
    },
  });
}

async function signedInUser(user: IUser): Promise<IUser | null> {
  const foundUser = await prisma.user.findUnique({
    include: {
      userProfile: true,
    },

    where: {
      email: user.email,
    },
  });

  if (foundUser?.password !== user.password) {
    return null;
  }

  return foundUser;
}

async function getUserByEmail(email: string): Promise<IUser | null> {
  const foundUser = await prisma.user.findUnique({
    include: {
      userProfile: true,
    },

    where: {
      email: email,
    },
  });



  return foundUser;



}
async function getUserByUserName(userName: string): Promise<IUser | null> {
    const foundUser = await prisma.user.findUnique({
      include: {
        userProfile: true,
      },
  
      where: {
        userName: userName
      },
    });
  
    return foundUser;
  }

  async function getUserById(id: string): Promise<IUser | null> {
    const foundUser = await prisma.user.findUnique({
      include: {
        userProfile: true,
      },
  
      where: {
        id: id,
      },
    });
  
    return foundUser;
  }


  async function updateUser(user:IUser): Promise <IUser|null>{
    const foundUser =await prisma.user.update({
      data:{
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        
      },
      include:{
        userProfile: true
      },
    
      where:{
        id: user.id
      }
    })
    if(foundUser.id === user.id){
      return foundUser
    }
    return null
  }
  
  



export default {
  getAllUsers,
  saveUser,
  signedInUser,
  getUserByEmail,
  getUserByUserName,
  getUserById,
  updateUser
} as const;
