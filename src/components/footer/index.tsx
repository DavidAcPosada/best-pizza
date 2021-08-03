import {AppBar, Container, Toolbar} from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import {Link} from 'react-router-dom'


import Brand from 'static/images/brand/Best Pizza.png'

import LanguageSelector from "../languageSelector";

import useStyles from './styles'

const Footer = () => {
  const classes = useStyles()

  return (
    <AppBar position='static' className={classes.root} elevation={0}>
      <Toolbar component={Container} className={classes.content}>
        <span className={classes.icons_container}>
          <a href='https://www.facebook.com' target='_blank'>
            <FacebookIcon/>
          </a>
          <a href='https://www.instagram.com'>
            <InstagramIcon/>
          </a>
        </span>
        <span>
          <Link to='/'>
            <img src={Brand} alt='brand logo' className={classes.brand}/>
          </Link>
          <LanguageSelector />
       </span>
      </Toolbar>
    </AppBar>
  )
}

export default Footer