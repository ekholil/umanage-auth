import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { createUser } from './app/modules/user/user.service'
import userRouter from './app/modules/user/user.route'
const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/v1', userRouter)
app.get('/', async (req: Request, res: Response) => {
  await createUser({ id: '999', password: '1222', role: 'student' })
  res.send('Hello World!')
})

export default app
