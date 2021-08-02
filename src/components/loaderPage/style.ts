import {makeStyles, Theme} from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    position: 'absolute',
    width: '100%',
    height: '100vh',
    background: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: theme.zIndex.appBar
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: 'bold'
  }
}))

export default styles