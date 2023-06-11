
//!React
import { useState } from 'react'
import reactLogo from './assets/react.svg'

//!MateriUI React
import { Container,Grid } from '@material-ui/core'


//!Custom Components
import Navbar from '../components/ComplaintsNavbar.jsx'
import RecipeReviewCard from '../components/ComplaintsCard.jsx'


import useStyles from '../style/style.js'


//*App
function App() {

  const classes = useStyles()

  return (
    <div className="App">
      <Navbar/>
      <br/><br/>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>          
              <RecipeReviewCard />
              <RecipeReviewCard />
              <RecipeReviewCard />
        </Grid>
      </Container>

      </div>
  )
}

export default App
