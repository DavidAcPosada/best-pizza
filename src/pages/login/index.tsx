import {Button, InputAdornment, Link, TextField} from "@material-ui/core";
import {useSnackbar, VariantType} from "notistack"
import {useTranslation} from "react-i18next";
import {useHistory} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {Formik} from 'formik'
import clsx from 'clsx'

import useValidationsMessages from "lib/hooks/useValidationsMessages";
import LOGIN_VALIDATIONS from 'lib/validations/login'
import {LOGIN} from "lib/redux/types/auth.types";

import { login } from 'api/auth'

import UserIcon from 'static/images/icons/ic_usuario.png'
import PassIcon from 'static/images/icons/ic_password.png'

import useStyles from './styles'

const Login = () => {
  const {t} = useTranslation('auth_layout')
  const classes = useStyles()

  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch()
  const history = useHistory()

  const validationsSchema = useValidationsMessages(LOGIN_VALIDATIONS)

  const showMessage = ({ message, type }: { message: string, type: VariantType }) => enqueueSnackbar(message, {
    variant: type,
    anchorOrigin: {
      horizontal: 'right',
      vertical: 'top'
    },
    autoHideDuration: 3000,
    preventDuplicate: true
  })

  const onSubmit = async (values: { username: string; password: string }) => {
    const result = await login(values);
    if (!result?.found) return showMessage({
      message: t('auth_layout:messages.user_not_found', 'Usuario no encontrado'),
      type: 'error'
    })
    if (result?.wrong) return showMessage({
      message: t('auth_layout:messages.user_wrong', 'Usuario o contraseña incorrectos'),
      type: 'error'
    })

    dispatch({
      type: LOGIN,
      payload: result.data
    })
    history.push('/app')
  }

  return (
    <Formik
      initialValues={{username: '', password: ''}}
      onSubmit={onSubmit}
      validationSchema={validationsSchema}
    >
      {({handleSubmit, handleChange, handleBlur, values, errors, touched}) => (
        <form
          className={clsx(classes.form, classes.root)}
          onSubmit={handleSubmit}
          noValidate
        >
          <TextField
            name='username'
            label={t('auth_layout:form.username', 'Usuario')}
            variant='outlined'
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            required
            error={Boolean(errors.username && touched.username)}
            helperText={touched.username && errors.username}
            InputProps={{
              endAdornment: <InputAdornment position='end'><img src={UserIcon} width='25'
                                                                alt='user-icon'/></InputAdornment>
            }}
          />
          <TextField
            name='password'
            label={t('auth_layout:form.password', 'Contraseña')}
            variant='outlined'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type='password'
            fullWidth
            required
            error={Boolean(errors.password && touched.password)}
            helperText={touched.password && errors.password}
            InputProps={{
              endAdornment: <InputAdornment position='end'><img src={PassIcon} width='25'
                                                                alt='password-icon'/></InputAdornment>
            }}
          />
          <Link className={classes.forgot_pass_btn}>
            {t('auth_layout:form.forgot_password', '¿Olvidaste tu contraseña?')}
          </Link>
          <Button variant='contained' color='primary' type='submit'>
            {t('auth_layout:form.login_button', 'Iniciar sesión')}
          </Button>
        </form>
      )}
    </Formik>
  )
}

export default Login