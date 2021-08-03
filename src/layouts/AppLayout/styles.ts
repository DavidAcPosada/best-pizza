import {makeStyles, Theme} from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  brand: {
    position: 'absolute',
    top: theme.spacing(4),
    left: theme.spacing(8),
    width: '9em',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}))

export default styles