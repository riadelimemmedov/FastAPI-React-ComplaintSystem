import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Link,
} from '@material-ui/core';

const LoginModal = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        fullName:'',
        email: '',
        phone:'',
        iban:'',
        password: '',
        repassword: '',
    });
    const [toLogin,setToLogin] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // You can perform your registration logic here
        handleClose();
    };

    const handleLoginRedirect = () => {
        handleClose();
        // Add your code to redirect to the login page or update the URL accordingly
        console.log("Redirect to login");
    };


    const clickLogin = (e) => {
        e.preventDefault()
        if(e.target.textContent == 'Login'){
            setToLogin(true)
            delete formData['email']
            delete formData['password']
            for(let data in formData){
                document.getElementById(data).parentElement.parentElement.style.display='none'
            }
        }
        else{
            setToLogin(false)
            for(let data in formData){
                document.getElementById(data).parentElement.parentElement.style.display='inline-block'
                
            }
        }
    }

    return (
        <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Register
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Register</DialogTitle>
            <DialogContent>
            <DialogContentText>Please fill form for profile.</DialogContentText>

        <div id="root-form">
                <form onSubmit={handleSubmit}>
                <TextField
                    autoFocus
                    margin="dense"
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    type="text"
                    fullWidth
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <TextField
                    margin="dense"
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    type="text"
                    fullWidth
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />

                <TextField
                    margin="dense"
                    id="fullName"
                    name="fullName"
                    label="Full Name"
                    type="text"
                    fullWidth
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />

                <TextField
                    margin="dense"
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <TextField
                    margin="dense"
                    id="phone"
                    name="phone"
                    label="Mobile Phone"
                    type="phone"
                    fullWidth
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />

                
                <TextField
                    margin="dense"
                    id="iban"
                    name="iban"
                    label="Iban Number"
                    type="text"
                    fullWidth
                    value={formData.iban}
                    onChange={handleChange}
                    required
                />

                
                <TextField
                    margin="dense"
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth
                    value={formData.password}
                    onChange={handleChange}
                    required
                />


                <TextField
                    margin="dense"
                    id="repassword"
                    name="repassword"
                    label="Repassword"
                    type="password"
                    fullWidth
                    value={formData.repassword}
                    onChange={handleChange}
                    required
                />


                <DialogActions style={{'marginTop':'10px'}}>
                    <b style={{'marginRight':'auto','textAlign':'left'}}>
                        <span>Already have an account</span>: &nbsp;  
                        {toLogin && <a href="/" onClick={clickLogin} style={{'textDecoration':'none','marginRight':'55px'}}>Register</a>}
                        {!toLogin && <a href="/" onClick={clickLogin} style={{'textDecoration':'none'}}>Login</a>}
                    </b>


                    <Button onClick={handleClose} variant="contained" color="secondary">
                        Cancel
                    </Button>

                    {!toLogin && <Button type="submit" variant="contained" color="primary"> Register </Button>}
                    {toLogin && <Button type="submit" variant="contained" color="primary"> Login </Button>}

                    
                </DialogActions>
            </form>
        </div>
            
            </DialogContent>
        </Dialog>
        </div>
    );
};

export default LoginModal;
