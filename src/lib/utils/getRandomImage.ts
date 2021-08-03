import Panos from 'static/images/restaurants/Panos_pizza.png'
import Camion from 'static/images/restaurants/pizzeria_camion.png'
import Sbarro from 'static/images/restaurants/Sbarro.png'
import Stroller from 'static/images/restaurants/stroller_pizza.png'
import Trulli from 'static/images/restaurants/trulli.png'
import Voglia from 'static/images/restaurants/voglia_di_pizza.png'

const images = [Panos, Camion, Sbarro, Stroller, Trulli, Voglia]

const randomImage = () => {
  const random = Math.floor(Math.random() * images.length)
  return images[random]
}

export default randomImage