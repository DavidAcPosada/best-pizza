import {makeStyles, Theme} from "@material-ui/core";
import Background from "static/images/background/imagebkg.webp";

const styles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    maxHeight: '100vh'
  },
  banner: {
    width: '40%',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundOrigin: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      width: '50%'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  pizza_image: {
    width: '90%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    width: '30%',
    [theme.breakpoints.down('sm')]: {
      width: '65%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%'
    }
  },
}))

export default styles