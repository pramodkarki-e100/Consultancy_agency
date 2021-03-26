import React from 'react';
import './Testimonials.css';
import TestimonialImg from '../assests/testinomials.png';
import TestimonialUser1 from '../assests/testimonialUser_1.jpg';

const Testimonials = () => {
  return (
    <div className='testimonials' id='testimonials'>
      <div className='testimonials__left'>
        <img src={TestimonialImg} alt='testimonials' />
      </div>

      <div className='testimonials__right'>
        <h1>Testi<span>monials</span></h1>

        <div className='testimonials__cards'>
          <div className='testimonials__cards__info'>
            <div className='client__img'>
              <img src={TestimonialUser1} alt='client' />
            </div>
            <div className='quotes__icon'>
              <i class='fas fa-quote-right'></i>
            </div>

            <div className='client__ratings'>
              {[0, 1, 2, 3, 4].map((rating) => (
                <i class='fas fa-star'></i>
              ))}

              <div className='client__testimonials'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            <div className='client__info'>
              <h1>Pramod Karki</h1>
              <span>Web developer</span>
            </div>
          </div>
        </div>

        <div className='next__testimonial'>
          <div className='next forward-icon'>
            <i className='fas fa-angle-left'></i>
          </div>
          <div className='next backward-icon'>
            <i className='fas fa-angle-right'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
