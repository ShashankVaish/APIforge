import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Shashank@00',
  database: process.env.DB_NAME || 'apiforge',
  synchronize: true,
  logging: true,
  entities: [__dirname + '/entities/*.entity.ts'],
})