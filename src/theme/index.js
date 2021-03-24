const { createMuiTheme } = require("@material-ui/core");

const theme = createMuiTheme(({
    palette:{
        primary: {
            main:'#333'
        },
        secondary: {
            main: '#fff'
        },
        text: {
            primary: '#855555',
            secondary: '#f1f'
        }
    }
}))

export default theme;