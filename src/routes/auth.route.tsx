import {Route, Switch, useRouteMatch} from 'react-router-dom'

import Login from 'pages/login'

const AuthRoute = () => {
  const {path} = useRouteMatch()

  return (
    <Switch>
      <Route
        component={Login}
        path={`${path}/login`}
        exact
      />
    </Switch>
  )
}
export default AuthRoute