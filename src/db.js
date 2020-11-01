import mongoose from 'mongoose'

async function init() {
  try { 
    const conn = await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log(`MongoDB on: ${conn.connection.host}`)
  }catch(err) {
    console.error(err)
    process.exit(1)
  }
}

export default init