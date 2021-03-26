import React from 'react';
import './AboutField.css';
import { Button } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
const AboutField = () => {
  return (
    <div className='aboutField'>
      <div className='aboutField__left'>
        <div className='aboutField__bg__img'></div>
      </div>

      <div className='aboutField__right'>
        <div className='background__shade'></div>

        <div className='field__info'>
          <div className='field__info__title'>
            <h1>Looking for a First Class Business Plan Consultants ? </h1>
            <div className='line_field'></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className='field__info__features'>
            <div className='features'>
              <span>
                <i class='fas fa-check-circle'></i>
              </span>
              <div className='features__desc'>
                <p>Immigration consultant, Information technology consulting</p>
              </div>
            </div>

            <div className='features'>
              <span>
                <i class='fas fa-check-circle'></i>
              </span>
              <div className='features__desc'>
                <p>Consultant pharmacist Creative consultant</p>
              </div>
            </div>

            <div className='features'>
              <span>
                <i class='fas fa-check-circle'></i>
              </span>
              <div className='features__desc'>
                <p>Employment consultant Environmental consultant</p>
              </div>
            </div>
          </div>

          <div className='field__info__btn'>
            <Link smooth to='#contact'>
              <Button className='field__contactUs'>Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className='company__successs'>
        <div className='world_bg_image'></div>

        <div className='company__success__info'>
          <div className='company__success__desc'>
            <h3>A full consulting business agency in Nepal.</h3>
            <h1>We completed 2500+ Projects Yearly</h1>
          </div>

          <div className='company__success__tags'>
            <div className='tags'>
              <h1>1700+</h1>
              <p>Project Finsihed</p>
            </div>

            <div className='tags'>
              <h1>3400+</h1>
              <p>Business Solutions</p>
            </div>

            <div className='tags'>
              <h1>2900+</h1>
              <p>Effective Answers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutField;
