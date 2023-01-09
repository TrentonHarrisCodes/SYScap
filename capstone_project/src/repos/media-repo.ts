import IMedia from "@models/Media";
import IUserProfile from "@models/UserProfile";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getAllMedia(): Promise<IMedia[]> {
  return await prisma.media.findMany({
   
  });
}

async function savedMedia(
  media: IMedia,
  mediaId: string
): Promise<IMedia|IUserProfile> {
  return await prisma.media.create({
   
    data: {
        mediaName: media.mediaName,
            mediaType: media.mediaType,
            mediaUrl: media.mediaUrl,
            mediaDescription: media.mediaDescription,
            mediaId: mediaId
     
    },
  });
}
async function deleteMedia(id: string): Promise<void>{
await prisma.media.delete({
    
    where:{
        id: id
    }

})


}

async function updateMedia(media:IMedia): Promise<IMedia| null>{

    const updatedMedia =await prisma.media.update({
       where:{
         id: media.id
       },
        data:{
            mediaName: media.mediaName,
            mediaType: media.mediaType,
            mediaUrl: media.mediaUrl,
            mediaDescription: media.mediaDescription
           
      

        }

    })
    return updatedMedia
}

export default{
    savedMedia,
    getAllMedia,
    deleteMedia,
    updateMedia
}