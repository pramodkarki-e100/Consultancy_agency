import React from 'react';
import { Button } from 'react-bootstrap';
import './MainTheme.css';
import { HashLink as Link } from 'react-router-hash-link';

const MainTheme = () => {
  return (
    <div className='mainTheme'>
      <div className='background__image position-relative'></div>

      <div className='mainTheme__slogan container-md position-absolute'>
        <div className='title'>
          <h1>Creative Consultant Agency</h1>
        </div>
        <div className='desc'>
          <p>
            The first rule of any technology used in a business is that
            automation applied to an efficient operation will magnify the
            efficiency. The second is that automation applied to an inefficient
            operation will magnify the inefficiency.
          </p>
        </div>

        <Link smooth to='#contact'>
          <Button className='btn main__btn'>Become a Client</Button>
        </Link>
      </div>
    </div>
  );
};

export default MainTheme;
