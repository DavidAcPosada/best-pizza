import Brand from 'static/images/brand/Logo.png'

import { AppRoute } from 'routes'

import useStyles from './styles'

const AppLayout = () => {
  const classes = useStyles()

  return (
    <>
      <img src={Brand} alt='brand-logo' className={classes.brand} />
      <AppRoute />
    </>
  )
}

export default AppLayout