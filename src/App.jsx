import React, { useState } from 'react';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Grid, Typography, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Button, Link } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import Products from './components/Products';
import Customers from './components/Customers';
import Orders from './components/Orders';
import SlotsSignIn from './components/SlotsSignIn';
import SignUpPage from './components/SignUpPage';
import Slider from 'react-slick';
import Profile from './components/Profile';
import pro1 from './components/images/pro1.jpg';
import pro2 from './components/images/pro2.jpg';
import pro3 from './components/images/pro3.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handleSignIn = (userRole) => {
    setIsAuthenticated(true);
    setRole(userRole);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setRole('');
  };

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const carouselImages = [pro1, pro2, pro3];
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  // Footer Style with Unique Background Color
  const footerStyle = {
    backgroundColor: '#2D3A4A',  // Dark Blue background for a more modern feel
    color: 'white',
    padding: '50px 0',
    marginTop: '40px',
    textAlign: 'center',
    width: '100%', // Ensure the footer spans the full width
  };

  // Footer Heading Style
  const footerHeadingStyle = {
    fontSize: '1.2rem',
    fontWeight: '600',
    fontFamily: "'Roboto', sans-serif",
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '10px',
  };

  // Footer Content Style
  const footerContentStyle = {
    fontSize: '1rem',
    color: 'white',
    lineHeight: '1.6',
    maxWidth: '500px',
    margin: '0 auto 20px',
  };

  // Header Style
  const headerStyle = {
    color: 'black',
    fontSize: '80px',
    textAlign: 'center',
    marginTop: '20px',
    fontWeight: 'bold',
  };

  const headerStyleAfterLogin = {
    color: 'black',
    fontSize: '50px',
    textAlign: 'center',
    marginTop: '20px',
    fontWeight: 'bold',
  };

  // Flexbox Layout to make sure footer is at the bottom
  const containerStyle = {
    minHeight: '100vh', // Ensure the container takes full viewport height
    display: 'flex',
    flexDirection: 'column',
  };

  const contentStyle = {
    flex: 1, // Take up all available space, pushing footer to the bottom
  };

  return (
    <Router>
      <div style={containerStyle}>
        <PrimarySearchAppBar isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />

        <div style={contentStyle}>
          <Container maxWidth="xl" sx={{ mt: 10 }}>
            <Routes>
              {!isAuthenticated ? (
                <>
                  <Route
                    path="/"
                    element={
                      <div>
                        <h3 style={headerStyle}>Welcome to Agribzar</h3>
                        <Slider {...carouselSettings}>
                          {carouselImages.map((image, index) => (
                            <div key={index}>
                              <img
                                src={image}
                                alt={`carousel-image-${index}`}
                                className="carousel-image"
                              />
                            </div>
                          ))}
                        </Slider>
                      </div>
                    }
                  />
                  <Route path="/signin" element={<SlotsSignIn onSignIn={handleSignIn} />} />
                  <Route path="/signup" element={<SignUpPage />} />
                </>
              ) : (
                <>
                  <Route
                    path="/"
                    element={
                      <div>
                        <h3 style={headerStyleAfterLogin}>
                          Welcome {role === 'admin' ? 'Admin' : 'User'} to Agribzar
                        </h3>
                      </div>
                    }
                  />
                  <Route path="/products" element={<Products />} />
                  <Route path="/customers" element={<Customers />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/profile" element={<Profile />} />
                </>
              )}
            </Routes>
          </Container>
        </div>

        {/* Footer Section */}
        <footer className="footer" style={footerStyle}>
          <Container maxWidth="xl" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Grid container justifyContent="center" spacing={4}>
              {/* Terms of Use Section */}
              <Grid item>
                <IconButton href="/terms-of-use" color="inherit">
                  <Typography style={footerHeadingStyle}>Terms of Use</Typography>
                </IconButton>
                <Typography style={footerContentStyle}>
                  By using Agribzar, you agree to comply with our Terms of Use. These terms govern your access to and use of our services, and you must adhere to them while using the platform. Any violation of these terms may result in suspension or termination of your account.
                </Typography>
              </Grid>

              {/* Contact Us Section */}
              <Grid item>
                <IconButton onClick={handleOpenDialog} color="inherit">
                  <Typography style={footerHeadingStyle}>Contact Us</Typography>
                </IconButton>
                <Typography style={footerContentStyle}>
                  If you have any questions or concerns, please feel free to contact us at any time. Our customer service team is available 24/7 to assist you with your inquiries.
                </Typography>
              </Grid>

              {/* Terms & Conditions Section */}
              <Grid item>
                <IconButton href="/terms-conditions" color="inherit">
                  <Typography style={footerHeadingStyle}>Terms & Conditions</Typography>
                </IconButton>
                <Typography style={footerContentStyle}>
                  The Terms & Conditions outline the legal framework for using Agribzar's services. By accessing or using the services, you agree to abide by the rules, conditions, and policies we set forth. These terms include the limitation of liability and the resolution of disputes through arbitration.
                </Typography>
              </Grid>
            </Grid>

            {/* Social Media Icons Section */}
            <Grid container justifyContent="center" spacing={2} style={{ marginTop: '10px' }}>
              <Grid item>
                <IconButton href="https://facebook.com" color="inherit" target="_blank">
                  <FacebookIcon fontSize="large" />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  href="https://www.instagram.com/v_ams_i_/?next=%2F"
                  color="inherit"
                  target="_blank"
                  style={{
                    background: 'linear-gradient(45deg, #F58529, #D31275, #8A3AB9, #4B7EFC)',
                    borderRadius: '50%',
                  }}
                >
                  <InstagramIcon fontSize="large" />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton href="https://twitter.com" color="inherit" target="_blank">
                  <TwitterIcon fontSize="large" />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton href="https://www.linkedin.com/in/jakkula-vamsi-43923332b/" color="inherit" target="_blank">
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
          </Container>
        </footer>

{/* Contact Us Dialog */}
<Dialog
  open={openDialog}
  onClose={handleCloseDialog}
  PaperProps={{
    sx: {
      borderRadius: "12px",
      boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
      padding: "20px",
      maxWidth: "500px",
      background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)", // Soft gradient background
    }
  }}
>
  <DialogTitle sx={{ textAlign: "center", fontWeight: "bold", fontSize: "22px" }}>
    📞 Contact Us
  </DialogTitle>
  <DialogContent sx={{ textAlign: "center", fontSize: "18px" }}>
    <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
      📱 Phone:
      <Link href="tel:+919392764479" color="secondary" underline="hover">
        +91 9392764479
      </Link>
    </Typography>
    
    <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
      📧 Email:
      <Link href="https://mail.google.com/mail/u/0/#inbox" color="secondary" underline="hover">
        Email.com
      </Link>
    </Typography>

    <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
      📍 Address:
      <Link href="https://www.google.com/maps/search/?api=1&query=Vijayawada" target="_blank" color="secondary" underline="hover">
        Andhra Pradesh, Vijayawada , KLU
      </Link>
    </Typography>
  </DialogContent>
  <DialogActions sx={{ justifyContent: "center" }}>
    <Button onClick={handleCloseDialog} variant="contained" color="primary" sx={{ borderRadius: "20px", padding: "10px 20px" }}>
      Close
    </Button>
  </DialogActions>
</Dialog>

      </div>
    </Router>
  );
}

export default App;
