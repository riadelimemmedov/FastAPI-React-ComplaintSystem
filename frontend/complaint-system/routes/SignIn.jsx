
//!React
import { useState,useEffect } from 'react'

//!MateriUI React
import { Container,Grid } from '@material-ui/core'
import { TextField,Button,Box,Card,CardContent } from '@material-ui/core';
import { shadows } from '@mui/system';

//!Custom Components
import Navbar from '../components/ComplaintsNavbar.jsx'
import RecipeReviewCard from '../components/ComplaintsCard.jsx'

//!Third Party Package
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactPaginate from 'react-paginate';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

//!Custom styles
import useStyles from '../style/style.js'
import '../style/Pagination.css'



//*Login
const Login = () => {
    //navigate
    const navigate = useNavigate(); 


    //formData
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    
    //userCredentials
    const [userCredentials,setUserToken] = useState({
        token:''
    })


    //classes
    const classes = useStyles();


    //resolveAfter3Sec
    const resolveAfter3Sec = new Promise(function(resolve,reject){
        setTimeout(() => resolve('Login called'),5000)
    });


    //handleLoginSubmit
    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        if(formData.email !== null && formData.password !== null){
            axios.defaults.headers.common['Authorization']=''
            window.localStorage.removeItem('token')
            await axios.post('http://127.0.0.1:7000/login/',{email:formData.email, password:formData.password})
                .then((response)=>{
                    setUserToken({token:response.data.token})
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token
                    window.localStorage.setItem('token', response.data.token)
                    toast.promise(
                        resolveAfter3Sec.then((response) => setTimeout(()=>{
                            window.location.href = '/'
                            window.localStorage.setItem('isLoggedIn',true)
                        }),8000),
                        {
                            pending: 'Your credentials verified',
                            success: 'Login to site successfully 👌',
                            error: 'Happen problem at the server Please check again 🤯'
                        }
                    )
                })
                .catch((err)=>{
                    toast.error(`${err.response.data.detail}`)
                })
        }
    };

    //handleInputChange
    const handleInputChange = (key) => (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [key] : event.target.value
        }))
    }


    //handleDomEvent
    const handleDomEvent = (event) => {
        window.document.title = 'Login'
    }


    //checkUserLoggeInOrNot
    const checkUserLoggeInOrNot = () => {
        const isLoggedIn = window.localStorage.getItem('isLoggedIn')
        if(isLoggedIn == 'false') {
            window.history.back()
        }
    }


    //?useEffect
    useEffect(() => {
        handleDomEvent()
        checkUserLoggeInOrNot()
    },[])

    
    //? return jsx
    return (
    <>  
        <Navbar/>
            <Box mt={5} style={{width:'50%',marginLeft:'auto',marginRight:'auto'}} sx={{boxShadow:4}}>
                <Card>
                <CardContent>
                    <form className={classes.root} onSubmit={handleLoginSubmit}>
                    <h3>Login Form</h3>
                    <TextField
                        label="Email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange('email')}
                        required
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={formData.password}
                        onChange={handleInputChange('password')}
                        required
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                    </form>
                </CardContent>
            </Card>
        </Box>
        <ToastContainer />
    </>
)};
export default Login;