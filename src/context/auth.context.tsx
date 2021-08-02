import {createContext, ReactNode, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

import { getUserInfo } from 'api/auth'

import {LOGIN} from "lib/redux/types/auth.types";

const AuthContext = createContext({})

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const userId = Number(localStorage.getItem('userId'))
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (Number.isSafeInteger(userId)) {
      getUserInfo(userId).then(data => {
        if (data) {
          dispatch({
            type: LOGIN,
            payload: data
          })
          console.log('id data')
          history.push('/app')
        } else {
          history.push('/auth/login')
          localStorage.clear()
        }
      })
        .catch(error => console.log(error))
    } else {
      history.push('/auth/login')
    }
  }, [])

  return (
    <AuthContext.Provider value={{}}>
      <>{children}</>
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }