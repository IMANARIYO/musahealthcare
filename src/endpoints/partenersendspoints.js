import {
  createModelHandler,
  readModelHandler,
  updateModelHandler,
  deleteModelHandler
} from '../controllers/crud.js'
import { uploaded } from '../utils/multer.js'

import express from 'express'
import {partners} from '../models/parteners.js'

const partnersRouter = express.Router()

// Define endpoint handlers
const createPartner = createModelHandler(partners)
const readPartners = readModelHandler(partners)
const updatePartner = updateModelHandler(partners)
const deletePartner = deleteModelHandler(partners)

// Define your Express routes for partners
partnersRouter.post('/createPartner', uploaded, createPartner)
partnersRouter.get('/getAllPartners', readPartners)
partnersRouter.get('/getPartnerById/:id', readPartners)
partnersRouter.put('/updatePartner/:id', uploaded, updatePartner)
partnersRouter.delete('/deletePartner/:id', deletePartner)

export default partnersRouter
