import IUser from "@models/User";
import userRepo from "@repos/user-repo";

function getAllUsers(): Promise<IUser[]> {
  return userRepo.getAllUsers();
}

function saveUser(user: IUser): Promise<IUser> {
  return userRepo.saveUser(user);
}

function signInUser(user: IUser): Promise<IUser | null> {
  return userRepo.signedInUser(user);
}

function getUserByEmail(email: string): Promise<IUser | null> {
  return userRepo.getUserByEmail(email);
}

function getUserByUserName(userName: string): Promise<IUser | null> {
  return userRepo.getUserByUserName(userName);
}

function updateUser(user:IUser): Promise<IUser | null> {
  return userRepo.updateUser(user);
}

function getUserById(id: string): Promise<IUser | null> {
  return userRepo.getUserById(id);
}

export default {
  getUserById,
  updateUser,
  getUserByUserName,
  getUserByEmail,
  signInUser,
  getAllUsers,
  saveUser,
} as const
