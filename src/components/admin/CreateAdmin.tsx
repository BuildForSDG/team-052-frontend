/* eslint-disable react/prop-types */
import React, { Fragment, useContext, FC } from 'react';
import Navigation from '../layouts/Navigation';
import { Form } from 'react-bootstrap';
import AppContext from '../../context/AppContext';
import { ToastContainer } from 'react-toastify';
import { AdminProps } from '../../interfaces/AdminProps.interface';

const CreateAdmin: FC<AdminProps> = ({ history }) => {
  const { admin, createAdminChange, createAdmin, creatingAdmin } = useContext(AppContext);
  const { name, email, password } = admin;

  const submitForm = () => email.length > 0 && password.length > 0 && password.length;

  return (
    <Fragment>
      <Navigation backgroundColor={'rgb(1, 136, 73)'} variantColor={'light'} />
      {/* <Banner /> */}
      <div className="container form">
        <Form
          onSubmit={(e: { preventDefault: () => void }) => {
            e.preventDefault();
            createAdmin(admin, history);
          }}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" value={name} onChange={createAdminChange} type="text" placeholder="Name" />
            </Form.Group>

            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              value={email}
              onChange={createAdminChange}
              type="email"
              placeholder="Enter email"
            />
            {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              value={password}
              onChange={createAdminChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <div className="submit-container">
            {creatingAdmin ? (
              <button disabled={creatingAdmin} className="button">
                Creating Admin...
              </button>
            ) : (
              <button className="button" disabled={!submitForm()}>
                Create Admin
              </button>
            )}
          </div>
        </Form>
        <ToastContainer />
      </div>
    </Fragment>
  );
};

export default CreateAdmin;
