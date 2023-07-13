
//!React
import { useState,useEffect } from 'react'

//!MateriUI React
import { Container,Grid,Card,Box,CardContent,TextField,Button } from '@material-ui/core'


//!Custom Components
import Navbar from '../components/ComplaintsNavbar.jsx'
import RecipeReviewCard from '../components/ComplaintsCard.jsx'


//!Third Party Package
import { ToastContainer, toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';
import { useNavigate } from "react-router-dom";



//!Custom styles
import useStyles from '../style/style.js'
import '../style/Pagination.css'
import axios from 'axios';



//*Register
const Register = () => {

    //navigate
    const navigate = useNavigate(); 


    //State Value
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        phone:'',
        first_name:'',
        last_name:'',
        full_name:'',
        iban:''
    });
    const [isActive,setIsActive] = useState(true)
    const [errors,setError] = useState([])


    //classes
    const classes = useStyles();


    //resolveAfter3Sec
    const resolveAfter3Sec = new Promise(function(resolve,reject){
        setTimeout(() => resolve('Register called'),5000)
    });


    //checkFormData
    const checkFormData = (register_form_obj,e) => {
        let field_count_number = 0
        if(e.target.value.length == 0){
            setIsActive(false)
            console.log('Field clened,currently not inputed value this field')
        }
        else{

            for(let key in register_form_obj){
                if(register_form_obj[key] != ''){
                    field_count_number+=1
                }
            }
            if(Object.keys(formData).length-1 == field_count_number){
                e.target.addEventListener("paste", function(event) {
                    setIsActive(false)
                    console.log('IsActive value is ', isActive)
                });
            }        
        }
        field_count_number == Object.keys(formData).length ? setIsActive(false) : Object.keys(formData).length-1 == field_count_number ? '' : setIsActive(true)
    }

    //handleErrors
    const handleErrors = (err_message) => {
        toast.error(String(err_message))
    }


    //handleRegisterSubmit
    const handleRegisterSubmit = async (event) => {
        event.preventDefault();
        const ibanPattern = /^[A-Z]{2}\d{2}[A-Z\d]{4}\d{7}([A-Z\d]?){0,16}$/;

        if(formData && ibanPattern.test(formData.iban)){
            await axios.post('http://127.0.0.1:7000/register/',{
                "email": formData.email,
                "password": formData.password,
                "phone": formData.phone,
                "first_name": formData.first_name,
                "last_name": formData.last_name,
                "full_name": formData.full_name,
                "iban": formData.iban
            })
            .then((response) => {
                toast.promise(
                    resolveAfter3Sec.then((response) => setTimeout(()=>{
                        window.location.href = '/login'
                    }),8000),
                    {
                        pending: 'Your credentials verified',
                        success: 'Registered to site successfully 👌',
                        error: 'Happen problem at the server Please check again 🤯'
                    }
                )
            })
            .catch((err) => {
                setError([])
                if(Array.isArray(err.response.data.detail)){
                    for(const property in err.response.data.detail){    
                        if(err.response.data.detail[property]['msg'] != undefined){
                            handleErrors(err.response.data.detail[property]['msg'])
                        }                        
                    }
                }
                else{
                    handleErrors(err.response.data.detail)
                }
            })
        }
        else{
            handleErrors('Please input valid IBAN format')
        }
    } 

    //handleDomEvent
    const handleDomEvent = (event) => {
        window.document.title = 'Register' 
    }


    //handleInputChange
    const handleInputChange = (key) => (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [key] : event.target.value
        }))
        checkFormData(formData,event)
    }


    //checkUserLoggeInOrNot
    const checkUserLoggeInOrNot = () => {
        const isLoggedIn = window.localStorage.getItem('isLoggedIn')
        if(isLoggedIn == 'false') {
            window.location.href = '/'
        }
    }
    

    //?useEffect
    useEffect(() => {
        handleDomEvent(),
        checkUserLoggeInOrNot()
    },[])


    //?return jsx
    return(
        <>
            <Navbar/>
            <Box mt={5} style={{width:'50%',marginLeft:'auto',marginRight:'auto'}} sx={{boxShadow:4}}>
                <Card>
                    <CardContent>
                        <form className={classes.root} onSubmit={handleRegisterSubmit}>
                            <h3>Register Form</h3>
                                <TextField
                                    label="Email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange('email')}
                                    
                                />
                                <TextField
                                    label="Password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleInputChange('password')}
                                    
                                />
                                <TextField
                                    label="Phone"
                                    type="text"
                                    value={formData.phone}
                                    onChange={handleInputChange('phone')}
                                />
                                <TextField
                                    label="First Name"
                                    type="text"
                                    value={formData.first_name}
                                    onChange={handleInputChange('first_name')}
                                />
                                <TextField
                                    label="Last Name"
                                    type="text"
                                    value={formData.last_name}
                                    onChange={handleInputChange('last_name')}
                                />
                                <TextField
                                    label="Full Name"
                                    type="text"
                                    value={formData.full_name}
                                    onChange={handleInputChange('full_name')}
                                />
                                <TextField
                                    label="Iban"
                                    type="text"
                                    value={formData.iban}
                                    onChange={handleInputChange('iban')}
                                />
                                <Button variant="contained" color="primary" type="submit" disabled={isActive}>
                                    Submit
                                </Button>
                        </form>
                    </CardContent>
                </Card>
            </Box>

            {errors}

            <ToastContainer />
        </>
    )
}
export default Register
