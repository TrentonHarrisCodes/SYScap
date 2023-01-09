import IUserFormContent from "@models/FormContent";
import IUserProfile from "@models/UserProfile";
import IUserProject from "@models/UserProject";
import userFormContentRepo from "@repos/userFormContent-repo";

function getAllUserFormContents(): Promise<IUserFormContent[]>{
    return userFormContentRepo.getAllUserFormContents()
}

function saveUserFormContent(userFormContent:IUserFormContent, userProjectId:string): Promise <IUserFormContent>{
    return userFormContentRepo.saveUserFormContent(userFormContent, userProjectId)
}
function updateUserFormContent(userFormContent: IUserFormContent): Promise<IUserFormContent|null>{
    return  userFormContentRepo.updateUserFormContent(userFormContent)
}

function deleteUserFormContent(id: string): Promise<void>{
    return userFormContentRepo.deleteUserFormContent(id)
}
function getUserFormByProject(userProjectId:string): Promise<IUserFormContent[]>{
    return userFormContentRepo.getUserFormByProject( userProjectId)
}

export default{
    getAllUserFormContents,
    saveUserFormContent,
    updateUserFormContent,
    deleteUserFormContent,
    getUserFormByProject
}