import mongoose from 'mongoose'
import config from './config/index'
import app from './app'
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Database connection success')
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('Error to connect database')
  }
}
bootstrap()
