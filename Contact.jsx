import React from 'react';
// import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import f from'./Images/fb.jpg'
import i from'./Images/insta.jpg'
import t from'./Images/tiwwt.jpg'
const ContactUs = () => {
    return (
        <div className="contact-section">
            <h2>Contact Us</h2>
            <p>Follow us on social media:</p>
            <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer"><img src={f} alt="Facebook" /></a>&nbsp;&nbsp;
            <a href="https://www.instagram.com/YourProfile" target="_blank" rel="noopener noreferrer"><img src={i} alt="Instagram" /></a>&nbsp;&nbsp;
            <a href="https://twitter.com/YourHandle" target="_blank" rel="noopener noreferrer"><img src={t} alt="Twitter" /></a>
  
        </div>
    );
}

export default ContactUs;
