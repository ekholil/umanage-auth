import { IUser } from './user.interface'
import { User } from './user.model'
import config from '../../../config/index'
import { generateUserId } from './user.utils'
export const createUser = async (user: IUser): Promise<IUser | null> => {
  // Set user id
  const userid = await generateUserId()
  user.id = userid
  // Set default password
  if (!user.password) {
    user.password = config.default_student_password as string
  }

  const createdUser = await User.create(user)
  if (!createUser) {
    throw new Error('Failed to create user')
  }
  return createdUser
}
