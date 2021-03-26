import React from 'react';
import './Contact.css';
import { Button } from 'react-bootstrap';
import { Forms } from '../components';
import { HashLink as Link } from 'react-router-hash-link';

const ContactUs = () => {
  return (
    <div className='contactUs' id='contact'>
      <div className='contact-container'>
        <div className='contact__left'>
          <div className='contact__heading'>
            <div className='contact__title'>
              <h2>Get in touch</h2>
              <div className='line'>
                <div className='long-line'></div>
                <div className='small-line'></div>
              </div>
            </div>

            <h1>Don't hesistate to contact with us for inquires!</h1>
          </div>

          <div className='contact__form'>
            <Forms />
          </div>
        </div>

        <div className='contact__right'>
          <div className='contact-intro '>
            <div className='sideline'></div>
            <p>
              Our offices are located on the traditional, unceded and occupied
              territories of the Coast Salish and Sto:lo peoples, including the
              territories
            </p>
          </div>

          <div className='contact__card'>
            <div className='card__left'>
              <div className='contact-card__info '>
                <i className='fas fa-headphones-alt'></i>
                <p>24/7 hours Customer Support</p>
              </div>
            </div>

            <div className='card__right'>
              <div className='contact-card__info'>
                <i className='fas fa-hand-holding-usd'></i>
                <p>100% money back guarentee</p>
              </div>
            </div>
          </div>

          <div className='contact__details'>
            <div className='contact__icon'>
              <i class='fas fa-phone-alt'></i>
            </div>
            <div className='phone__number'>
              <h6>Call us for more information</h6>
              <p>+977 9800001111</p>
            </div>
            <div className='mail__btn'>
              <Link smooth to='#contact'>
                <Button className='mail__btn__info'>
                  <i class='fas fa-envelope'></i>Mail Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
