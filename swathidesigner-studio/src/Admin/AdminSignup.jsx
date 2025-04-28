import { useState } from "react";
import { useNavigate } from "react-router";
import { TextField, Button, Typography, Container } from "@mui/material";

function AdminSignup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Simple validation
      if (!username || !password) {
        setErrorMessage('Username and password are required');
        return;
      }
  
      try {
        // Send POST request to backend for signup
        const response = await fetch('http://localhost:5000/admin/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          // On success, navigate to login page
          navigate('/admin/login');
        } else {
          setErrorMessage(data.message || 'Something went wrong');
        }
      } catch (error) {
        console.error('Error during signup:', error);
        setErrorMessage('An error occurred while trying to sign up');
      }
    };

    return(
        <Container maxWidth="xs">
            <Typography variant = "h4" gutterBottom>Admin SignUp</Typography>
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
            <Button variant = "contained" color="primary" fullWidth type="submit">Sign Up </Button>
            </form>
        </Container>
    )
}
export default AdminSignup;