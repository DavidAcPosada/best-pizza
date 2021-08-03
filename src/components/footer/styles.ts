import {makeStyles, Theme} from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    background: theme.palette.common.black,
    padding: theme.spacing(2, 0)
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  icons_container: {
    '& .MuiSvgIcon-root': {
      fontSize: 40,
      color: theme.palette.common.white
    }
  },
  brand: {
    width: 60
  }
}))

export default styles