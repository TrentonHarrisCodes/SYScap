import { UserRoles } from "@shared/enums"
import IUserProfile from "./UserProfile"


interface IUser{

id: string,
firstName: string,
lastName: string,
userName: string,
email: string,
password: string,
role: string,
userProfile?: IUserProfile | null




}

export default IUser
