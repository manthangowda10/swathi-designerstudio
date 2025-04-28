import { useState } from "react";
import { useNavigate } from "react-router"; 
import { TextField, Button, Typography, Container }  from '@mui/material';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(!username || !password) {
            setErrorMessage('Username and password are required');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/admin/login',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if(response.ok){
                localStorage.setItem('adminToken', data.token);
                navigate('/admin/dashboard');
            } else {
                setErrorMessage(data.message || 'Something went wrong');
            }

        } catch (error) {
            console.error('Error during Login:', error);
        setErrorMessage('An error occurred while trying to Login');
        }
    }
    
    return (
     <Container maxWidth="xs">
                <Typography variant = "h4" gutterBottom>Admin Login</Typography>
                <form onSubmit={handleSubmit} >
                <TextField 
                label = "Username"
                variant = "outlined"
                fullWidth
                required
                value = {username}
                onChange={(e) => setUsername(e.target.value)}
                /><br/><br/>
                <TextField
                label = "Password"
                variant = "outlined"
                fullWidth
                required
                value = {password}
                onChange = { (e) => setPassword(e.target.value)}
                />
                { errorMessage && <p style={{color:"red"}} >{errorMessage}</p>}
                <br/><br/>
                <Button variant = "contained" color="primary" fullWidth type="submit">Login </Button>
                </form>
    </Container>
    )
}

export default AdminLogin;