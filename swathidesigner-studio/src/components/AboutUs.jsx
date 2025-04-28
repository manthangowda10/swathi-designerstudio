import { Container, Typography,Box } from "@mui/material";

function AboutUs(){
    return (
        <Container maxWidth="md" sx={{py:6}} >
            <Box textAlign="center" mb={4} >
                <Typography variant="h3" sx={{color:"#5D4037"}} component="h1" gutterBottom >
            About Us / Our Story
            </Typography>
            </Box>
            <Typography variant="body1" component="p" sx={{mb:2,color:"#5D4037"}} >
            For over a decade, Swathi Designer Studio has been a testament to passion, precision, and the art of bespoke design. Our journey began humbly in a small garage tucked away in an old family home, where dreams were stitched together with every careful cut and intricate embroidery. It was there that the foundation was laid—where a deep commitment to quality and a love for craftsmanship ignited what would soon become a flourishing legacy.
As our reputation for blending tradition with modern style grew, so did our ambitions. Today, we proudly call a distinguished corner building our home—a strategic spot in a prominent neighborhood, right on a bustling road. This vibrant location is not just a reflection of our success; it's a daily reminder of our commitment to being accessible, engaging, and always ready to serve our diverse clientele.
Every piece we create is a labor of love. Our skilled tailors and artisans pour heart and soul into their work, ensuring that each stitch and every design detail is executed with utmost care and precision. Whether it’s a custom-designed blouse, an elegantly embroidered saree, or a contemporary western outfit, we are dedicated to exceeding our customers' expectations with personalized creations that celebrate both heritage and modernity.
At Swathi Designer Studio, we believe that fashion is not just about clothing—it’s about crafting experiences, telling stories, and building lasting relationships with every client. We invite you to be part of our continuing story, where every garment is a symbol of our journey from a modest beginning to a celebrated destination in the world of design.
            </Typography>
        </Container>
    )
}

export default AboutUs;