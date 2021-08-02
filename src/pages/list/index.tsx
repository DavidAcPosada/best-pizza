import BannerContainer from "components/bannerContainer";

import useStyles from './styles'

const List = () => {
  const classes = useStyles()

  return (
    <BannerContainer classes={{ content: classes.content }}>
      Listado
    </BannerContainer>
  )
}

export default List