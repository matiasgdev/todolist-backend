import mongoose from 'mongoose'
import app from './index.js'

require('dotenv').config()

async function init() {
  try { 
    await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(app.get('port'), () => {
      console.log('Server on port ' +  app.get('port'))
    })
  }catch(err) {
    console.error(err)
    process.exit(1)
  }
}

export default init