import {Button, Container, Grid, Typography} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {motion} from 'framer-motion'

import Lock from 'static/images/icons/ic_password.png'

import {LOGOUT} from "lib/redux/types/auth.types"

import BannerContainer from "components/bannerContainer";
import LoadingCards from 'components/loadingCards'
import StoreCard from "components/storeCard";
import Footer from "components/footer";

import {getStores} from 'api/stores'

import useStyles from './styles'

const List = () => {
  const {t} = useTranslation(['list', 'common'])
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()
  const [stores, setStores] = useState([])
  const [loading, setLoading] = useState(true)

  const variants = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
        staggerChildren: 0.5
      }
    },
    hidden: {
      opacity: 0,
      y: -50
    }
  }

  useEffect(() => {
    getStores()
      .then((data) => {
        setStores(data)
        setLoading(false)
      })
      .catch(error => console.error(error))
  }, [])

  const logout = () => {
    localStorage.clear()
    history.push('/auth/login')
    dispatch({
      type: LOGOUT
    })
  }

  return (
    <BannerContainer classes={{content: classes.root}}>
      <Container className={classes.controls}>
        <Button onClick={logout} startIcon={<img src={Lock} alt='lock icon' width={18} />}>
          {t('common:sign_out', 'Salir')}
        </Button>
      </Container>
      <div className={classes.content}>
        <Typography variant='h2' color='textSecondary' className={classes.title}>
          {t('list:title', 'Pizzerías')}
        </Typography>

        <div className={classes.text_container}>
          <Typography variant='h3' className={classes.title_secondary}>{t('list:stores', 'Tiendas')}</Typography>
          <Typography variant='subtitle2' className={classes.subtitle} color='textSecondary'>{t('list:subtitle', 'Escoge tu pizzería favorita')}</Typography>
        </div>

        <LoadingCards visible={loading} />
        <Grid container spacing={2} component={motion.div} variants={variants} initial='hidden' animate='show'>
          {stores.map(store => (
            <Grid item lg={4} md={6} sm={4} xs={12} >
              <StoreCard data={store} />
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer/>
    </BannerContainer>
  )
}

export default List