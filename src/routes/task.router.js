import express from 'express'
import task from '../controllers/task.controller'
import  {validateCreate, validateUpdate} from '../validate/task.validate'
import {findTaskById} from '../middlewares/findTask'
const router = express.Router()

// list
router.get('/', task.list)

// create
router.post('/', validateCreate, task.create)

// detail 
router.get('/:id', findTaskById, task.detail)

// update
router.put('/:id', findTaskById, validateUpdate, task.update)

// delete 
router.delete('/:id', findTaskById, task.delete)


export default router