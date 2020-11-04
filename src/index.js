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

app.listen(app.get('port'), () => {
  console.log('Server on port ' +  app.get('port'))
})

if (process.env.ENVIROMENT === 'development') {
  app.use(morgan('dev'))
}
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000'
}))

app.get('/', (req, res) => {
  res.send('/')
})

app.use('/api/task', task)


app.use(notFound)
app.use(errorHandler)

export default app