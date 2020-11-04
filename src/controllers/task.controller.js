import Task from '../models/Task.model'

class TaskController {

  async list(req, res, next) {
    try {
      const tasks = await Task.find({})
      if (tasks.length === 0) {
        return res.json({message: 'No tasks'})
      }
      res.json(tasks)
    } catch (err) {
      next(err)
    }
  }

  async listByUser(req, res, next) {
    try {
      const userTasks = await Task.find({
        user: req.params.user
      })
      res.json(userTasks)

    } catch (err) {
      next(err)
    }
  }

  async detail(req, res, next) {
    res.json(res.task)
  }

  async create(req, res, next) {
    try {
      let newTask = new Task(req.body)

      const taskExists = await Task.findOne({title: newTask.title})

      if (taskExists) {
        res.status(400)
        throw new Error('Ya existe una tarea con ese título')
      }

      newTask = await newTask.save()

      res.status(201).json({
        message: `Tarea creada correctamente`,
        task: newTask
      })
      
    }catch(err) {
      next(err)
    }
  }

  async update(req, res, next) {
    try {
      Object.keys(req.body).map(key => {
        if (req.body[key] !== '') {
          res.task[key] = req.body[key]
        }
      })
      const newTaskUpdated = await res.task.save()
      res.status(200).json({
        message: `Tarea ${newTaskUpdated._id} actualizada correctamente`,
        task: newTaskUpdated
      })
    }catch(err) {
      next(err)
    }
  }

  async delete(req, res, next) {
    try {
      await res.task.delete()
      res.json({message: `Tarea ${req.params.id} eliminada correctamente`})
    } catch (err) {
      next(err)
    }
  }

}


export default new TaskController()


