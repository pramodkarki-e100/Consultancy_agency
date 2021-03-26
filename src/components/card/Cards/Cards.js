import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Cards = ({ props }) => {
  const { id, title, icon, desc } = props;
  console.log('id are: ', id);
  return (
    <Card className={`card card-${id}-row`}>
      <Card.Body style={{ textAlign: 'center' }}>
        <div className='card__icon'>
          <i className={`fas ${icon}`}></i>
        </div>
        <Card.Title style={{ fontSize: '30px', margin: '10px 0px' }}>
          {title}
        </Card.Title>

        <Card.Text>{desc}</Card.Text>
      </Card.Body>
      <Card.Body style={{ textAlign: 'center', color: 'white' }}>
        <div className='more__desc'>
          Get Started{' '}
          <span className='more__desc__icon'>
            <i class='fas fa-arrow-right'></i>
          </span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Cards;
