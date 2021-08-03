import {makeStyles, Theme} from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 0,
    width: '100%',
  },
  content: {
    width: 'calc(100% - 17px)',
    height: '100%',
    overflowY: 'scroll',
    padding: theme.spacing(5),
    boxSizing: 'content-box'
  },
  controls: {
    textAlign: 'right',
    paddingTop: theme.spacing(3)
  },
  title: {
    position: 'relative',
    fontSize: '1.2rem',
    fontFamily: 'Lato',
    fontWeight: 'bold',
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(0, 2),
    textAlign: 'center',
    width: '4em'
  },
  text_container: {
    margin: theme.spacing(3, 0)
  },
  title_secondary: {
    fontSize: '2rem',
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },
  subtitle: {
    fontFamily: 'Lato',
    fontSize: '1rem',
    marginTop: theme.spacing(1)
  }
}))

export default styles