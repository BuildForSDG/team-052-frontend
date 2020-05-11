import React from 'react';

const Footer = () => {
  return (
    <div className="footer p-5" style={{ backgroundColor: '#6C757D' }}>
      <div className="row text-center">
        <h3 className="col-4">About</h3>
        <h3 className="col-4">Contact</h3>
        <div className="col-4">
          <h3>Socials</h3>
          <div className="row text-center bg-dark">
            <div>dummy</div>
            <div>dummy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
