
//!React
import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'

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


//!React Router
import {Link} from 'react-router-dom'



//*App
function App() {

  //classes
  const classes = useStyles()


  const [complaints,getComplaints] = useState(['item1', 'item2', 'item3','item4','item5','item6','item7'])
  const [currentPage, setCurrentPage] = useState(0);


  const itemsPerPage = 3; // Number of items per page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedItems = complaints.slice(startIndex, endIndex); // Array of items for the current page


  //handlePageChange
  const handlePageChange = ({ selected }) => {
      setCurrentPage(selected);
  };  


  //handleDomEvent
  const handleDomEvent = (event) => {
        window.document.title = 'Home'
  }


  //handleUserLoggedInOrNot
  const handleUserLoggedInOrNot = () => {
    let isLoggedIn = window.localStorage.getItem('isLoggedIn')
    const isLoginUrl = document.referrer.includes('login')
    if(isLoggedIn == "true" && isLoginUrl){
      toast.success('Login to site successfully')
      window.localStorage.setItem('isLoggedIn',false)
    }
  }


  //?useEffect
    useEffect(() => {
      handleDomEvent()
      handleUserLoggedInOrNot()
  },[])


  //?retur jsx
  return (
    <>
    <div className="App">
        <Navbar/>
        <br/><br/>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>          
                <RecipeReviewCard />
                <RecipeReviewCard />
                <RecipeReviewCard />

                {
                  paginatedItems?.length > 0 ? 
                  (
                    <>
                      {paginatedItems.map((complaint,index)=>(
                        <p key={index}>{complaint}</p>
                      ))}

                      <ReactPaginate
                        pageCount={endIndex < complaints.length ? complaints.length/3 : ''} // Total number of pages
                        pageRangeDisplayed={3} // Number of pages to display in the pagination
                        marginPagesDisplayed={2} // Number of pages to display before and after the current page
                        onPageChange={handlePageChange} // Callback function to handle page changes
                        containerClassName={'pagination'} // CSS class for the pagination container
                        activeClassName={'active'} 
                        disabled={true}
                />
                    </>
                  )
                  :
                  (
                    <p>Not found</p>
                  )
                }

          </Grid>
        </Container>

    </div>
    <ToastContainer/>
    </>
  )
}
export default App
