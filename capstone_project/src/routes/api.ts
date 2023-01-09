import { Router } from 'express';
import userRoutes from '@routes/user-routes' 
import userProfileRoutes from '@routes/userProfile-routes'
import userProjectRoutes from '@routes/userProject-routes'
import addressRoutes from '@routes/address-routes'
import userFormcontentRoutes from '@routes/userFormContent-routes'

import mediaRoutes from '@routes/media-routes'
const baseRouter = Router();


baseRouter.use('/user', userRoutes)
baseRouter.use('/userProfile', userProfileRoutes)
baseRouter.use('/userProject', userProjectRoutes)
baseRouter.use('/address', addressRoutes)
baseRouter.use('/userFormContent', userFormcontentRoutes)

baseRouter.use('/media', mediaRoutes)
export default baseRouter