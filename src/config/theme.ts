import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FAC545'
    }
  },
  typography: {
    h1: {
      fontFamily: 'Lato',
    },
    h2: {
      fontFamily: 'Lato',
    },
    h3: {
      fontFamily: 'Lato',
    },
    h4: {
      fontFamily: 'Lato',
    },
    h5: {
      fontFamily: 'Lato',
    },
    h6: {
      fontFamily: 'Lato',
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        fontFamily: 'Lato'
      }
    },
    MuiButton: {
      root: {
        textTransform: 'inherit',
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        paddingTop: 15,
        paddingBottom: 15
      }
    }
  }
})

export default theme