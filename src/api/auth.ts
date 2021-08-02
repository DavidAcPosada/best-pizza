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

export { login }