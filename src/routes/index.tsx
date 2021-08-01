import {BrowserRouter as Router, Route} from 'react-router-dom'

import { AuthLayout, AppLayout } from 'layouts'

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
  </Router>
)

export { default as AuthRoutes } from './auth.route'
export { default as AppRoute } from './app.route'
export default Routes