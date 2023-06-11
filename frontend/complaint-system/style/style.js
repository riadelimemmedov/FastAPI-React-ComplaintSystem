import { makeStyles } from '@material-ui/core/styles'


//!useStyles
const useStyles = makeStyles((theme) =>({
    cardGrid:{
        paddingTop:'20px 0px'
    },
    card:{
        height:'100%',
        display:'flex',
        flexDirection:'column'
    },
}))

export default useStyles