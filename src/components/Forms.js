import React from 'react';
import { Form, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

const Forms = () => {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId='formGridName'>
          {/* <Form.Label>Your Full Name</Form.Label> */}
          <Form.Control type='name' placeholder='Your Name*' />
        </Form.Group>

        <Form.Group as={Col} controlId='formGridPhone'>
          {/* <Form.Label>Phone Number</Form.Label> */}
          <Form.Control type='phonenumber' placeholder='Your Phone Number' />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId='formGridAddress1'>
        <Form.Control placeholder='Address' />
      </Form.Group>

      <Form.Group controlId='formGridService'>
        {/* <Form.Label>Address 2</Form.Label> */}
        <Form.Control as='select' defaultValue='Choose Service'>
          <option>Choose Service</option>
          <option>...</option>
        </Form.Control>
      </Form.Group>

      <InputGroup>
        <FormControl
          as='textarea'
          aria-label='message'
          placeholder='Messages'
          style={{ height: '100px' }}
        />
      </InputGroup>

      <Button className='submit__contact-info' type='submit'>
        <i className='fas fa-paper-plane'></i>
        Get a Quotes
      </Button>
    </Form>
  );
};

export default Forms;
