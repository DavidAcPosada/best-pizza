import {Grid, makeStyles, Theme} from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton'

const useStyles = makeStyles((theme: Theme) => ({
  item: {
    borderRadius: theme.spacing(3)
  }
}))

const LoadingCards = ({visible}: { visible: boolean }) => {
  const classes = useStyles()
  if (!visible) return null
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Skeleton className={classes.item} variant='rect' width={300} height={300}/>
      </Grid>
      <Grid item xs={4}>
        <Skeleton className={classes.item} variant='rect' width={300} height={300}/>
      </Grid>
      <Grid item xs={4}>
        <Skeleton className={classes.item} variant='rect' width={300} height={300}/>
      </Grid>
    </Grid>
  )
}

export default LoadingCards