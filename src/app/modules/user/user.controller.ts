import { Request, Response } from 'express'
import { createUser } from './user.service'

export const createUserController = async (req: Request, res: Response) => {
  const { user } = req.body
  try {
    const result = await createUser(user)
    res.status(200).json({
      status: 'Sucess',
      user: result,
    })
  } catch (err) {
    res.status(400).json({ status: 'Failed', message: 'Failed to create user' })
  }
}
