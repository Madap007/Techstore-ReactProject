// App.js
import React, { useContext, useState } from 'react';
import { Button,Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from "react-router-dom";
import { compareSync } from 'bcryptjs';
import { useNavigate } from 'react-router-dom';

import { ProductContext } from '../context/ProductContext';

import './Login.css'

function App() {
  const { register, handleSubmit } = useForm();
  const { isLoggedIn, setIsLoggedIn , setUsername } = useContext(ProductContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [showSignInMessage, setShowSignInMessage] = useState(false);

  async function onUserLogin(userCredObj) {
    console.log("in user login meth")
    console.log(userCredObj)
    try {
      const res = await axios.get(
        `http://localhost:4000/users?username=${userCredObj.username}`
      );
      const usersList = res.data;
      
      if (usersList.length === 0) {
        setError('Invalid Username');
      } else {
        const result = compareSync(userCredObj.password, usersList[0].password);
       
        if (result) {
          setIsLoggedIn(true);
          setUsername(usersList[0].username);
          setShowSignInMessage(true);
          alert('Successfully logged in!');
          console.log(isLoggedIn);
          navigate('/cart');
        } else {
          setError('Invalid Password');
        }
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login. Please try again.');
    }
  }

  return (
    <div className="my-5 d-flex align-items-center justify-content-center" >
   
      <Card style={{width:"40rem" }} >
      {showSignInMessage && (
  <div className="floating-message">
    <p>You have successfully signed in!</p>
  </div> 
)}
        
            <Card.Body className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
            
                <span className="h1 fw-bold mb-0">TechVerse</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>
                Sign into your account
              </h5>

              {error.length !== 0 && <p className="text-danger">{error}</p>}

              <Form onSubmit={handleSubmit(onUserLogin)}>
                <Form.Group className="mb-4">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" {...register('username')} size="lg" />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" {...register('password')} size="lg" />
                </Form.Group>

                <Button className="mb-4 px-5 mr-5" variant="dark" size="lg" type="submit">
                  Login
                </Button>

                <Link to="/signup" className="small text-muted">
                  New here? Signup
                </Link>
              </Form>

              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div>
            </Card.Body>
        
     
      </Card>
    </div>
  );
}

export default App;
