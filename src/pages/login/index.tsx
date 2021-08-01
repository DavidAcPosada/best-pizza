import {Button, InputAdornment, Link, TextField} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {Formik} from 'formik'
import clsx from 'clsx'

import LOGIN_VALIDATIONS from 'lib/validations/login'

import UserIcon from 'static/images/icons/ic_usuario.png'
import PassIcon from 'static/images/icons/ic_password.png'

import useStyles from './styles'

const Login = () => {
  const classes = useStyles()
  const {t} = useTranslation(['auth_layout', 'validations'])

  const onSubmit = (values: { username: string; password: string }) => {
    console.log(values)
  }

  return (
    <Formik
      initialValues={{username: '', password: ''}}
      onSubmit={onSubmit}
      validationSchema={LOGIN_VALIDATIONS({
        required: t('validations:required', 'Campo requerido')
      })}
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
            helperText={errors.username}
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
            helperText={errors.password}
            InputProps={{
              endAdornment: <InputAdornment position='end'><img src={PassIcon} width='25'
                                                                alt='password-icon'/></InputAdornment>
            }}
          />
          <Link className={classes.forgot_pass_btn}>
            {t('auth_layout:form.forgot_password', '¿Olvidaste tu contraseña?')}
          </Link>
          <Button variant='contained' color='primary' type='submit'>
            {t('auth_layout:form.login_btn', 'Iniciar sesión')}
          </Button>
        </form>
      )}
    </Formik>
  )
}

export default Login