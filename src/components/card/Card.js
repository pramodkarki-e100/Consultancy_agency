import React from 'react';
import Cards from './Cards/Cards';
import './Card.css';
const CardDetails = [
  {
    id: 1,
    title: 'Products Consulting',
    icon: 'fa-tags',
    desc:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
  },

  {
    id: 2,
    title: 'Professional Consulting',
    icon: 'fa-flag-checkered',
    desc:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
  },
  {
    id: 3,
    title: 'Financial Consulting',
    icon: 'fa-wallet',
    desc:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
  },
];

const Card = () => {
  console.log(CardDetails);
  return (
    <div
      className='cards'
    //   style={{ display: 'flex', justifyContent: 'space-around', }}
    >
      {CardDetails.map((card) => (
        <Cards key={card.id} props={card} />
      ))}
    </div>
  );
};
// margin: '0rem 6.3rem'

export default Card;
