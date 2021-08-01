import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    borderRadius: 50,
    marginLeft: theme.spacing(2)
  },
  avatar: {
    width: 25,
    height: 25,
  }
}))

export default useStyles