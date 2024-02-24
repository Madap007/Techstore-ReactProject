import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { hashSync } from 'bcryptjs';
import { Card, Form, Button } from 'react-bootstrap';


const SignupPage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [error, setError] = useState('');

  async function onUserRegister(userObj) {
    try {
      // Search for duplicate user
      const res1 = await axios.get(`http://localhost:4000/users?username=${userObj.username}`);
      const usersList = res1.data;

      if (usersList.length === 0) {
        if (userObj.username.length < 5) {
          setError('Username must contain at least 5 characters.');
        } else if (userObj.password.length < 8) {
          setError('Password must contain at least 8 characters.');
        } else {
          const hashedPassword = hashSync(userObj.password, 5);
          userObj.password = hashedPassword;
          const res = await axios.post('http://localhost:4000/users', userObj);
          if (res.status === 201) {
            navigate('/login');
          }
        }
      } else {
        setError('User already exists!');
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="my-5 d-flex align-items-center justify-content-center" >
      <Card style={{width:"40rem" }}>
       
            <Card.Body className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <span className="h1 fw-bold mb-0">TechVerse</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>
                Sign Up for an account
              </h5>

              {error.length !== 0 && <p className="text-danger">{error}</p>}

              <Form onSubmit={handleSubmit(onUserRegister)}>
                <Form.Group className="mb-4">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" {...register('username')} placeholder="Enter your Username" required />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" {...register('password')} placeholder="Enter your password" required />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" {...register('email')} placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control type="date" {...register('dob')} placeholder="Date of Birth" required />
                </Form.Group>

                <Button className="mb-4 px-5 mr-5" variant="dark" size="lg" type="submit">
                  Sign Up 
                </Button>

                <Link to="/login" className="small text-muted">
                  Already have an account? Login
                </Link>
              </Form>
            </Card.Body>
         
      </Card>
    </div>
  );
};

export default SignupPage;
