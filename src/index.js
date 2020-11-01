import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import db from './db'
import { notFound, errorHandler } from './middlewares/errorMiddleware'
import task from './routes/task.router'
const app = express()

require('dotenv').config()

app.set('port', process.env.PORT)
db()

if (process.env.ENVIROMENT === 'development') {
  app.use(morgan('dev'))
}
app.use(express.json())
app.use(cors({
  origin: 'http://localhost'
}))

app.get('/', (req, res) => {
  res.send('/')
})

app.use('/api/task', task)


app.use(notFound)
app.use(errorHandler)

export default app