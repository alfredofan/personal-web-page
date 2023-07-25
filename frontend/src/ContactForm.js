import React, { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import styled from 'styled-components'; // Import styled-components library

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  width: 90%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;


const Input = styled.input`
width: 100%;
height: 40px;
font-size:1rem;
`;

const TextArea = styled.textarea`
width: 100%;
height: 75px;
font-size:1.05rem;
`;

const ContactForm = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm() && captchaToken) {
      setIsSubmitting(true);
      try {
        const response = await axios.post('/api/submit-form', {
          ...formData,
          captchaToken,
        });
        console.log('Form submitted:', response.data);
        // Reset the form after successful submission
        setFormData(initialFormState);
      } catch (error) {
        console.error('Form submission failed:', error);
        // Handle the error and show a user-friendly message if needed
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label><br/>
        <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label><br/>
        <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message">Message</label><br/>
        <TextArea id="message" name="message" value={formData.message} onChange={handleChange} />
        {errors.message && <p>{errors.message}</p>}
      </div>
      <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" onChange={handleCaptchaChange} />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </FormContainer>
  );
};

export default ContactForm;