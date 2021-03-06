import * as yup from 'yup'

const schemaCreate = yup.object().shape({
  user: yup
  .string()
  .trim()
  .min(4, 'El nombre de usuario debe tener al menos 4 caracteres')
  ,
  title: yup
    .string()
    .required('Se requiere un título')
    .lowercase()
    .min(7, 'El titulo debe tener al menos 5 caracteres')
    .max(20, 'El titulo debe tener máximo 20 caracteres')
  ,
  description: yup
    .string()
    .required('Se requiere una descripción')
    .min(50, 'La descripcion debe tener al menos 50 caracteres')
  ,
  completed: yup
    .bool()
    .default(false)
  ,
  dof: yup
    .date()
    .default(function() {
      // one week for date of finish
      return new Date(Date.now() + 604800000) 
    })
})


const schemaUpdate = yup.object().shape({
  user: yup
    .string()
    .trim()
    .min(4, 'El nombre de usuario debe tener al menos 4 caracteres')
  ,
  title: yup
    .string()
    .min(7, 'El titulo debe tener al menos 7 caracteres')
    .max(20, 'El titulo debe tener máximo 20 caracteres')
  ,
  description: yup
    .string()
    .min(50, 'La descripcion debe tener al menos 50 caracteres')
  ,
  completed: yup
    .bool()
    .default(false)
  ,
  dof: yup
    .date()
})



export const validateCreate =  (req, res, next) => {
  try {
    const result = schemaCreate.validateSync(req.body, {abortEarly: false})
    req.body = result
    next()
  } catch(err) {
    next(err)
  }
}

export const validateUpdate =  (req, res, next) => {
  try {
    const result = schemaUpdate.validateSync(req.body, {abortEarly: false})
    req.body = result
    next()
  } catch(err) {
    next(err)
  }
}

