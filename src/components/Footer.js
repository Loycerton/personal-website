import React from "react";

const Footer = () => {
  const year = new Date();
  return (
      <div className='mt-auto py-3' style={{backgroundColor:'#fff09c'}}>
          <div className='d-flex justify-content-center pb-3 pt-3'>
              &copy; {year.getFullYear()} Aleksandr Shchilkin
          </div>
      </div>

  );
};

export default Footer;
