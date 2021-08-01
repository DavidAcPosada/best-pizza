import {LOGIN} from '../types/auth.types'
import {authInitialState} from "../initial-states/auth.initial-state";

const authReducer = (state = authInitialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logged: true
      }
    default:
      return state;
  }
}

export default authReducer