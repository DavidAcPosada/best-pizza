import {useSelector} from "react-redux";

import { AppRoute } from 'routes'

const AppLayout = () => {
  const user = useSelector((state: any) => state.user.info)

  return (
    <div>
      <p>AppLayout</p>
      {JSON.stringify(user, null, 2)}
      <AppRoute />
    </div>
  )
}

export default AppLayout