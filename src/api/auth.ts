import axios from 'axios'

import CONSTANT from 'config/CONSTANT'

interface LoginValues {
  username: string;
  password: string;
}

export interface UserInfo {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
}

/*
* login
* User authentication
*
* @param username: string
* @param password: string
* */
const login = async ({ username, password }: LoginValues) => {
  try {
    return await axios.get(CONSTANT.DATA).then(({ data }: any) => {
      const userFound = data.response?.users?.find((user: UserInfo) => user.email === username)
      if (!userFound) return { found: false};
      if (userFound.password !== password) return { found: true, wrong: true };
      return {
        wrong: false,
        found: true,
        data: userFound
      };
    })
  } catch (error) {
    console.error(error)
  }
}

/*
* getUserInfo
* Search user on data and validate id storage on app
*
* @params userId: number
* returns UserInfo | null
* */
const getUserInfo = async (userId: number) => {
  try {
    if (Number.isSafeInteger(userId)) {
      return await axios.get(CONSTANT.DATA).then(({ data }) => {
        const userFound = data.response?.users?.find((user: UserInfo) => user.id === userId)
        if (!userFound) return null
        return userFound
      })
    } else {
      return null
    }
  } catch(e) {
    console.error(e)
  }
}

export { login, getUserInfo }