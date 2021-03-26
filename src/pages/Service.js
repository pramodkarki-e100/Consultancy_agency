import React from 'react';
import './Service.css';

const serviceDetails = [
  {
    id: 1,
    icon: 'fa-coins',
    title: 'Financial Limit',
  },
  {
    id: 2,
    icon: 'fa-chart-line',
    title: 'Financial Growth',
  },
  {
    id: 3,
    icon: 'fa-layer-group',
    title: 'Tax Management',
  },
  {
    id: 4,
    icon: 'fa-user',
    title: 'Customer Experience',
  },
  {
    id: 5,
    icon: 'fa-project-diagram',
    title: 'Private Equity',
  },
  {
    id: 6,
    icon: 'fa-user-shield',
    title: 'Insurance Services',
  },
];
const Service = () => {
  return (
    <div className='service' id='service'>
      <div className='service__title'>
        <h4>Services</h4>
        <h2>We offer many services to progress</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className='service__info'>
        {serviceDetails.map((service) => {
          return (
            <div className='service__card'>
              <div className='service__icon'>
                <i class={`fas ${service.icon}`}></i>
              </div>
              <div className='service__heading'>
                <h4>{service.title}</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                  eiusmod tempor incididunt ut
                </p>
              </div>
            </div>
          );
        })}

        {/* <div className='service__card'>
          <div className='service__icon'>
            <i class='fas fa-coins'></i>
          </div>
          <div className='service__heading'>
            <h4>Financial Limit</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
              eiusmod tempor incididunt ut
            </p>
          </div>
        </div>

        <div className='service__card'>
          <div className='service__icon'>
            <i class='fas fa-coins'></i>
          </div>
          <div className='service__heading'>
            <h4>Financial Limit</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
              eiusmod tempor incididunt ut
            </p>
          </div>
        </div>

        <div className='service__card'>
          <div className='service__icon'>
            <i class='fas fa-coins'></i>
          </div>
          <div className='service__heading'>
            <h4>Financial Limit</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
              eiusmod tempor incididunt ut
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Service;
