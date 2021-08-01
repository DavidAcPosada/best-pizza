import {Typography} from '@material-ui/core'
import {useTranslation} from 'react-i18next'

import {AuthRoutes} from 'routes'

import Pizza from 'static/images/shared/Pizza.png'
import Brand from 'static/images/brand/Login-Best-Pizza.png'

import LanguageSelector from 'components/languageSelector'
import PerspectiveImage from 'components/perspectiveImage'

import useStyles from './styles'

const AuthLayout = () => {
  const {t} = useTranslation('auth_layout')
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <aside className={classes.banner}>
        <PerspectiveImage src={Pizza} alt='Pizza' className={classes.pizza_image}/>
      </aside>
      <div className={classes.content}>
        <header className={classes.header}>
          <img className={classes.brand} src={Brand} alt='brand logo'/>
          <Typography variant='h3' className={classes.title}>{t('auth_layout:title', 'Bienvenido')}</Typography>
          <Typography variant='h5'
                      color='textSecondary'>{t('auth_layout:subtitle', 'A las mejores pizzas del mundo')}</Typography>
        </header>
        <AuthRoutes/>
      </div>
      <LanguageSelector className={classes.language_selector} />
    </main>
  )
}

export default AuthLayout