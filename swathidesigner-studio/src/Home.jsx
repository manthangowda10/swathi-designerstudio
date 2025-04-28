import { Typography, Button } from "@mui/material";
import Gallery from "./components/Gallery";
import './styles/Home.css';
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact"; // Assuming you have a Contact component

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }} id="home">
      <Typography variant="h3" sx={{ color: "#5D4037" }}>
        Welcome to Swathi Designer Studio
      </Typography>
      <br />
      <Typography variant="h6" sx={{ color: "#5D4037" }}>
        Your one stop shop for elegant outfits!
      </Typography>

      {/* Hero section */}
      <div>
        <img
          src="/src/assets/herosection.jpeg"
          alt="Hero"
          style={{
            width: "100%",
            maxWidth: "1200px",
            maxHeight: "720px",
            marginTop: "20px",
            objectFit: "contain"
          }}
        />
      </div>

      <br /><br />

      <a href="#gallery">
        <Button variant="contained" className="custom-explore-button">
          Explore our collection
        </Button>
      </a>

      <br /><br />

      <div id="gallery">
        <Gallery />
      </div>

      <br /><br />

      <div id="about">
        <AboutUs />
      </div>

      <br /><br />

      <div id="contact">
        <Contact />
      </div>

      <br /><br />

      <div className="footer">
        <Typography variant="body1" sx={{ color: "#5D4037" }}>
          &copy; 2023 Swathi Designer Studio. All rights reserved.
        </Typography>
      </div>
    </div>
  );
}

export default Home;
