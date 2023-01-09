import IUserProject from "@models/UserProject";
import IUserProfile from "@models/UserProfile";

import userProjectRepo from "@repos/userProject-repo";

function getAllUserProjects(): Promise<IUserProject[]>{
    return  userProjectRepo.getAllUserProjects()
}

function savedProject(userProject: IUserProject, userProfileId:string): Promise<IUserProject|IUserProfile>{
    return  userProjectRepo.savedProject(userProject, userProfileId)

}

function deleteProject(id:string): Promise<void>{
return userProjectRepo.deleteProject( id)

}

function updateProject(userProject:IUserProject): Promise<IUserProject| null>{
    return userProjectRepo.updateProject(userProject)
}

function getProjectByUser(userProfileId:string): Promise<IUserProject[]>{
    return userProjectRepo.getProjectByUser(userProfileId)
}

function getProjectByAllUser(userProfileId:string, projectRecipient:string): Promise<IUserProject[]>{
    return userProjectRepo.getProjectByAllUser(userProfileId, projectRecipient)
}

function getProjectById(id:string): Promise<IUserProject| null>{
    return userProjectRepo.getProjectById(id)
}


export default{

getAllUserProjects,
savedProject,
deleteProject,
updateProject,
getProjectByUser,
getProjectByAllUser,
getProjectById



} as const