import {makeStyles, Theme} from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    width: '60%',
    padding: theme.spacing(3.5, 0),
    display: 'flex',
    flexDirection: 'column',
  },
  form: {
    textAlign: 'center',
    width: '100%',
    '& > *': {
      marginBottom: theme.spacing(2)
    }
  },
  forgot_pass_btn: {
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(4.5),
    color: '#000',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  }
}))

export default styles