import React, { Fragment } from 'react';
import Navigation from '../layouts/Navigation';
import { Form, Button } from 'react-bootstrap';

const CreateAdmin = () => {
  return (
    <Fragment>
      <Navigation backgroundColor={'rgb(1, 136, 73)'} variantColor={'light'} />
      {/* <Banner /> */}
      <div className="container form">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Fragment>
  );
};

export default CreateAdmin;