import Task from './models/Task.model.js'
import db from './db'
import tasks from './data/tasks'
import dotenv from 'dotenv'

dotenv.config()

db()

const destroyData = async () =>  {
  try {
    await Task.deleteMany()

    console.log('Data deleted succesfully')
    process.exit()
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

const importData = async () => {
  try {
    await Task.insertMany(tasks)
    console.log("Data imported succesfully")
    process.exit()
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

if (process.argv[2] === 'destroy') {
  destroyData()
} else {
  importData()
}

