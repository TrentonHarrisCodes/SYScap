import IUserProfile from "@models/UserProfile";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getAllUserProfiles(): Promise<IUserProfile[]> {
  return await prisma.userProfile.findMany({
    include: {
      project: true,
      address: true,
      media: true
    },
  });
}

async function saveUserProfile(
  userProfile: IUserProfile,
  userId: string
): Promise<IUserProfile> {
  return await prisma.userProfile.create({
    include: {
      project: true,
      address: true,
      media: true,
    },
    data: {
      telephone: userProfile.telephone,
      userPhoto: userProfile.userPhoto,
      rating: userProfile.rating,


      userId: userId,
    },
  });
}

async function updateUserProfile(
  userProfile: IUserProfile
): Promise<IUserProfile | null> {
  const updateUserProfile = await prisma.userProfile.update({
    data: {
      telephone: userProfile.telephone,
      userPhoto: userProfile.userPhoto,
      rating: userProfile.rating,
      bio: userProfile.bio,
      jobTitle: userProfile.jobTitle,
      website: userProfile.website,
      companyName: userProfile.companyName,
      
    },
    include: {
      project: true,
      address: true,
      media: true,
    },
    where: {
      id: userProfile.id,
      
    },
  });
  if (updateUserProfile.id === userProfile.id) {
    return updateUserProfile;
  }
  return null;
}

export default {
  getAllUserProfiles,
  saveUserProfile,
  updateUserProfile,
} as const;
