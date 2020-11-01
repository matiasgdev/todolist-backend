import { model, Schema} from 'mongoose'

const taskSchema = new Schema({
  user: {
    type: String,
    required: true,

  },
  title: {
    type: String,
    min: 7,
    required: true,
  },
  description: {
    type: String,
    min: 25,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  // date of finish task
  dof: { 
    type: Date,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
})


export default model('Task', taskSchema)
