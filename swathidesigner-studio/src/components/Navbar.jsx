import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import Logo from "../assets/SwathiDesignerStudioLogo.jpg";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#6B3E2F", px: 2 }}>
        <Toolbar className='toolbar'>
          <Box className='logo-title-box'>
            <img 
              src={Logo}
              alt="Swathi Logo"
              className='logo-img'
            />
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ fontFamily: 'Lora, serif' }} 
            >
              Swathi Designer Studio
            </Typography>
          </Box>
          <Box>
            <a href="#home" className='nav-link'>Home</a>
            <a href="#gallery" className='nav-link'>Gallery</a>
            <a href="#about" className='nav-link'>About Us</a>
            <a href="#contact" className='nav-link'>Contact</a>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
