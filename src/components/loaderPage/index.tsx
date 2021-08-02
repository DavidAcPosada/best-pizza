import Lottie from 'react-lottie'

import PizzaAnimation from 'static/animations/pizza.json'

import useStyles from './style'

const LoaderPage = () => {
  const classes = useStyles()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: PizzaAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className={classes.root}>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
  )
}

export default LoaderPage