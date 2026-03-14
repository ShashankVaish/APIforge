import 'reflect-metadata'
import { AppDataSource } from './data-source'

export const connectDB = async () => {
  await AppDataSource.initialize()
  console.log('MySQL connected ✅')
}

export { AppDataSource }
// export * from './entities/user.entity'
connectDB()