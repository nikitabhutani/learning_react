import React from 'react';

// Footer component
const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <ul style={listStyle}>
          <li><a href="/privacy-policy" style={linkStyle}>Privacy Policy</a></li>
          <li><a href="/terms-of-service" style={linkStyle}>Terms of Service</a></li>
          <li><a href="/contact" style={linkStyle}>Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

// Inline styles for the footer
const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px 0',
  position: 'fixed',
  bottom: '0',
  width: '100%',
  textAlign: 'center'
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px'
};

const listStyle = {
  listStyleType: 'none',
  padding: '0',
  display: 'flex',
  justifyContent: 'center',
  gap: '15px'
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
};

export default Footer;