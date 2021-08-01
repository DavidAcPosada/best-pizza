import * as yup from 'yup'
import {ValidationsMessages} from "./interface";

const LOGIN_VALIDATIONS = (messages: ValidationsMessages) => yup.object().shape({
  username: yup.string().required(messages.required),
  password: yup.string().required(messages.required)
})

export default LOGIN_VALIDATIONS