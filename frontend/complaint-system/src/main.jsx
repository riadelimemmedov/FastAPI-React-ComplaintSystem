
//!React
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//!React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//!Custom Components
import SignIn from '../routes/SignIn.jsx'
import SignUp from '../routes/SignUp'


//?Render component to client site dynamically
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App/>}/>
            <Route path="/login" element={<SignIn/>}/>
            <Route path="/register" element={<SignUp/>}/>
        </Routes>
    </BrowserRouter>
)
