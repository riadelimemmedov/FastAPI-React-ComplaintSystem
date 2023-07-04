
//!React
import { useState,useEffect } from 'react'

//!MateriUI React
import { Container,Grid } from '@material-ui/core'


//!Custom Components
import Navbar from '../components/ComplaintsNavbar.jsx'
import RecipeReviewCard from '../components/ComplaintsCard.jsx'


//!Third Party Package
import { ToastContainer, toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';


//!Custom styles
import useStyles from '../style/style.js'
import '../style/Pagination.css'



//*Register
const Register = () => {

    //handleDomEvent
    const handleDomEvent = (event) => {
        window.document.title = 'Register' 
    }
    

    //?useEffect
    useEffect(() => {
        handleDomEvent()
    },[])


    //?return jsx
    return(
        <div>
            <p>Sign Up</p>
        </div>
    )
}
export default Register
