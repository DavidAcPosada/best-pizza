import {Route, Switch} from "react-router-dom";
import List from "pages/list";

const AppRoutes = () => {
  return (
    <Switch>
      <Route
        component={List}
        path='/'
      />
    </Switch>
  )
}

export default AppRoutes