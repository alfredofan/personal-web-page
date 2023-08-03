//ContactForm.js

// Styled-components and other imports
import React, { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import { navigate } from 'gatsby'
import styled from 'styled-components'; // Import styled-components library



// Styled-components and other imports

const FormContainer = styled.form`

  display: flex;
  flex-direction: column;
  row-gap: .8rem;
  width: 90%;
  color: white;

 
  label {
    line-height:35px;
   }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;


const Input = styled.input`
width: 100%;
height: 40px;
font-size:1rem;
color: #fff;
background-color: #151515 !important;
border-color: #222222;
outline: none; /* Remove default focus outline */


&:focus {
  border-color: #333;
  box-shadow: 0 0 5px #333; /*  box shadow to highlight the focused element */
}
`;

const TextArea = styled.textarea`
width: 100%;
height: 75px;
color: #fff !important;
font-size:1rem;
background-color: #151515 !important;
border-color: #222222;
outline: none; /* Remove default focus outline */



&:focus {
  border-color: #333;
  box-shadow: 0 0 5px #333; /*  box shadow to highlight the focused element */
}
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
`;

const RECAPTCHA_KEY = '6LdOyW8nAAAAANOttt8BDu--N5t_egosjAoanPe0'


const ContactForm = () => {
  const [state, setState] = React.useState({})

  const recaptchaRef = React.createRef() // new Ref for reCaptcha

  const initialFormState = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear the error message when the user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    // Add email validation logic here
    // This is a simple example, and you may want to use a more robust validation library
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaToken(value);
  };



  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const recaptchaValue = recaptchaRef.current.getValue()

    fetch('/.netlify/functions/submit', { // Update the endpoint to the Netlify function
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        'g-recaptcha-response': recaptchaValue,
        ...state,
      }),
    })
    .then(() => navigate(form.getAttribute('action')))
    .catch(error => alert(error))
  }


  // Use the environment variable directly
  // const siteKey = process.env.RECAPTCHA_SITEKEY;

    
  return (
    <FormContainer 
      name="contact-us"
      method="POST"
      data-netlify="true"              // the Netlify data attribute
      data-netlify-recaptcha="true"
      action="/thank-you"
      onSubmit={handleSubmit}       
    >
      {/* The "htmlFor" attribute should match the "id" of the associated form element */}
      <div>
        <label htmlFor="name">Name</label><br/>
        <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>} {/* Display error messages with a red color */}
      </div>
      <div>
        <label htmlFor="email">Email</label><br/>
        <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </div>
      <div>
        <label htmlFor="message">Message</label><br/>
        <TextArea id="message" name="message" value={formData.message} onChange={handleChange} />
        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
      </div>



      <ReCAPTCHA 
        ref={recaptchaRef}
        sitekey={process.env.REACT_APP_RECAPTCHA_SITEKEY} // Use the environment variable
        size="normal"
        id="recaptcha-google"

        // sitekey="6LdOyW8nAAAAANOttt8BDu--N5t_egosjAoanPe0" 
        onChange={handleCaptchaChange} 
      />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
    </FormContainer>
  );
};

export default ContactForm;