import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

import {AuthLayout, AppLayout} from 'layouts'

const Routes = () => (
  <Router>
    <Route
      path='/auth'
      component={AuthLayout}
    />
    <Route
      path='/app'
      component={AppLayout}
    />
    <Redirect
      to='/auth/login'
      from='/auth'
      exact
    />
  </Router>
)

export {default as AuthRoutes} from './auth.route'
export {default as AppRoute} from './app.route'
export default Routes