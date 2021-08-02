import {Typography} from '@material-ui/core'
import {useTranslation} from 'react-i18next'
import { motion } from 'framer-motion'

import {AuthRoutes} from 'routes'

import Brand from 'static/images/brand/Login-Best-Pizza.png'

import LanguageSelector from 'components/languageSelector'

import BannerContainer from "components/bannerContainer";

import useStyles from './styles'

const AuthLayout = () => {
  const {t} = useTranslation('auth_layout')
  const classes = useStyles()

  const variants = {
    hidden: {
      opacity: 0,
      y: -150
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.4
      }
    }
  }

  return (
    <BannerContainer>
      <motion.header variants={variants} initial='hidden' animate='show' className={classes.header}>
        <motion.img variants={itemVariants} className={classes.brand} src={Brand} alt='brand logo'/>
        <Typography
          component={motion.h3}
          variants={itemVariants}
          variant='h3'
          className={classes.title}
        >{t('auth_layout:title', 'Bienvenido')}</Typography>
        <Typography
          component={motion.h5}
          variants={itemVariants}
          variant='h5'
          color='textSecondary'
        >{t('auth_layout:subtitle', 'A las mejores pizzas del mundo')}</Typography>
      </motion.header>
      <AuthRoutes/>
      <LanguageSelector className={classes.language_selector}/>
    </BannerContainer>
  )
}

export default AuthLayout