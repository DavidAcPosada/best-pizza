import {ButtonBase, Typography} from "@material-ui/core";
import getRandomImage from "lib/utils/getRandomImage";

import useStyles from './styles'

const StoreCard = ({ data, onClick }: { data: any, onClick?: (e: any) => void }) => {
  const classes = useStyles()
  return (
    <ButtonBase className={classes.root} onClick={onClick}>
      <img className={classes.media} src={getRandomImage()} alt={data.name} />
      <Typography className={classes.title}>{data.name}</Typography>
      <Typography variant='caption' color='textSecondary'>{data.address}</Typography>
    </ButtonBase>
  )
}

export default StoreCard