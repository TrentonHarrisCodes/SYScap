import IMedia from "@models/Media"
import IUserProfile from "@models/UserProfile"
import mediaRepo from "@repos/media-repo"

function getAllmedia(): Promise<IMedia[]>{
    return  mediaRepo.getAllMedia()
}

function savedMedia(media: IMedia, mediaId:string): Promise<IMedia|IUserProfile>{
    return  mediaRepo.savedMedia(media, mediaId)

}

function deleteMedia(id:string): Promise<void>{
return mediaRepo.deleteMedia( id)

}

function updateMedia(media:IMedia): Promise<IMedia| null>{
    return mediaRepo.updateMedia(media)
}


export default{
    getAllmedia,
    savedMedia,
    deleteMedia,
    updateMedia
} as const