import Task from '../models/Task.model'

export const findTaskById = async (req, res, next) => {
  try {
    const id = req.params.id
    const task = await Task.findOne({_id: id})
    if (!task) {
      throw new Error(`Task ${id} not founded`)
    } else {
      res.task = task 
      next()
    }
  }catch(err) {
    next(err)
  }
}