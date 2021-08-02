import {motion} from 'framer-motion'
import {ReactNode} from "react";
import clsx from 'clsx'

import useStyles from './styles'

import PerspectiveImage from "../perspectiveImage";

import Pizza from "static/images/shared/Pizza.webp";

interface Classes {
  content?: string;
  banner?: string;
}

const BannerContainer = ({ children, classes }: { children: ReactNode, classes?: Classes }) => {
  const styles = useStyles()

  return (
    <main className={styles.root}>
      <motion.aside
        initial={{
          x: -200,
          opacity: 0
        }}
        animate={{
          x: 0,
          opacity:1
        }}
        transition={{ duration: 0.9, damping: 2, ease: 'easeInOut' }}
        className={clsx(styles.banner, classes?.banner)}
      >
        <PerspectiveImage src={Pizza} alt='Pizza' className={styles.pizza_image}/>
      </motion.aside>
      <div className={clsx(styles.content, classes?.content)}>
        {children}
      </div>
    </main>
  )
}

export default BannerContainer