import IAddress from "./Address";
import IUserProject from "./UserProject";

import IMedia from "./Media";

interface IUserProfile {
  id: string;

  telephone?: string|null;
  userPhoto?: string|null;
  rating?: number|null;
  bio?: string| null;
  jobTitle?:string|null;
  website?: string| null;
  companyName?: string|null;
  address?: IAddress | null;
  
  media?: IMedia [] 
  projects?: IUserProject[] 
}

export default IUserProfile;
