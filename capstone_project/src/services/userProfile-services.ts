import IUserProfile from "@models/UserProfile";
import userProfileRepo from "@repos/userProfile-repo";

function getAllUserProfiles():Promise<IUserProfile[]> {
    return userProfileRepo.getAllUserProfiles();
}

function saveUserProfile(userProfile:IUserProfile, userId:string): Promise<IUserProfile>{
    return userProfileRepo.saveUserProfile(userProfile, userId)
}

function updateUserProfile(userProfile: IUserProfile): Promise<IUserProfile|null>{
    return userProfileRepo.updateUserProfile(userProfile)
}



export default{
    getAllUserProfiles,
    saveUserProfile,
    updateUserProfile
} as const