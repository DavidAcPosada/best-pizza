import {ReactNode} from "react";

import useStyles from './styles'

import PerspectiveImage from "../perspectiveImage";

import Pizza from "static/images/shared/Pizza.webp";

const BannerContainer = ({ children }: { children: ReactNode }) => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <aside className={classes.banner}>
        <PerspectiveImage src={Pizza} alt='Pizza' className={classes.pizza_image}/>
      </aside>
      <div className={classes.content}>
        {children}
      </div>
    </main>
  )
}

export default BannerContainer