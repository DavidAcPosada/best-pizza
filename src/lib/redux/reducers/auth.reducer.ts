import {LOGIN, LOGOUT} from '../types/auth.types'
import {authInitialState} from "../initial-states/auth.initial-state";

const authReducer = (state = authInitialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        info: action.payload,
        logged: true
      }
    case LOGOUT:
      return authInitialState;
    default:
      return state;
  }
}

export default authReducer