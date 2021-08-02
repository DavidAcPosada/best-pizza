import {Typography} from '@material-ui/core'
import {useTranslation} from 'react-i18next'

import {AuthRoutes} from 'routes'

import Brand from 'static/images/brand/Login-Best-Pizza.png'

import LanguageSelector from 'components/languageSelector'

import BannerContainer from "components/bannerContainer";

import useStyles from './styles'

const AuthLayout = () => {
  const {t} = useTranslation('auth_layout')
  const classes = useStyles()

  return (
    <BannerContainer>
      <header className={classes.header}>
        <img className={classes.brand} src={Brand} alt='brand logo'/>
        <Typography variant='h3' className={classes.title}>{t('auth_layout:title', 'Bienvenido')}</Typography>
        <Typography variant='h5'
                    color='textSecondary'>{t('auth_layout:subtitle', 'A las mejores pizzas del mundo')}</Typography>
      </header>
      <AuthRoutes/>
      <LanguageSelector className={classes.language_selector}/>
    </BannerContainer>
  )
}

export default AuthLayout