import {makeStyles, Theme} from "@material-ui/core";

const styles = makeStyles(((theme: Theme) => ({
  root: {
    boxSizing: 'border-box',
    paddingBottom: theme.spacing(1.5),
    borderRadius: theme.spacing(1),
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  media: {
    width: '100%'
  },
  title: {
    marginTop: theme.spacing(1),
    fontFamily: 'Lato',
    fontSize: '1.2rem',
    fontWeight: 'bold'
  }
})))

export default styles
