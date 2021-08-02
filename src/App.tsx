import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import React, {Suspense} from 'react'
import {Provider} from 'react-redux'
import {SnackbarProvider} from 'notistack'

import store from 'config/createStore'
import theme from "config/theme";

import Routes from 'routes'
import LoaderPage from "./components/loaderPage";

function App() {
  return (
    <Suspense fallback={<LoaderPage/>}>
      <Provider store={store}>
        <SnackbarProvider maxSnack={3}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <Routes/>
          </MuiThemeProvider>
        </SnackbarProvider>
      </Provider>
    </Suspense>
  );
}

export default App;
