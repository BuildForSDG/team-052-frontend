/* eslint-disable react/prop-types */
import React, { Fragment, useContext } from 'react';
import { Form } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import Banner from '../layouts/Banner';
import Navigation from '../layouts/Navigation';
import { AppContext } from '../../context/AppState';

const CreateAdmin = ({ history }) => {
  const { admin, createAdminChange, createAdmin, creatingAdmin } = useContext(AppContext);
  const { name, email, password } = admin;

  const submitForm = () => email.length > 0 && password.length > 0 && password.length;

  return (
    <Fragment>
      <Navigation />
      <Banner />
      <div className="container form">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            createAdmin(admin, history);
          }}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Group controlId="formBasicPassword">
              <Form.Label className="form-label">Name</Form.Label>
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
