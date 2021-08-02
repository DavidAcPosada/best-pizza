import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import React, {Suspense} from 'react'
import {Provider} from 'react-redux'
import {SnackbarProvider} from 'notistack'

import store from 'config/createStore'
import theme from "config/theme";

import Routes from 'routes'

function App() {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <Routes/>
          </MuiThemeProvider>
        </Provider>
      </SnackbarProvider>
    </Suspense>
  );
}

export default App;
