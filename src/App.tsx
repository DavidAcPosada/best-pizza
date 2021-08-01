import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {Provider} from 'react-redux'
import React, {Suspense} from 'react';

import store from 'config/createStore'
import theme from "config/theme";

import Routes from 'routes'

function App() {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline/>
          <Routes/>
        </MuiThemeProvider>
      </Provider>
    </Suspense>
  );
}

export default App;
