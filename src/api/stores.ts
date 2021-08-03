import axios from 'axios'

import CONSTANT from 'config/CONSTANT'

/*
* getStores
* returns stores array
* */
const getStores = async () => {
  return await axios.get(CONSTANT.DATA).then(({ data }) => {
    return data.response.stores
  }).catch(error => console.error(error))
}

export {getStores}