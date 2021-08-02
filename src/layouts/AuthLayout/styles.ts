import {makeStyles, Theme} from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  header: {
    textAlign: 'center'
  },
  brand: {
    width: '15em',
    marginBottom: theme.spacing(3.5)
  },
  title: {
    fontWeight: 'bold'
  },
  language_selector: {
    position: 'absolute',
    top: theme.spacing(4),
    right: theme.spacing(4)
  }
}))

export default styles