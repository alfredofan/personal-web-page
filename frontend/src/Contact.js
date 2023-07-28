import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactSection = styled.section`
  position: relative;
  // z-index: 10;
  display: flex;
  height: fit-content;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #000; /* Changed background color to gray #818181 */
  padding-top: 7rem;
  padding-bottom: 7rem;

  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
  'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 1rem;
`;

const ContactContainer = styled.div`
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
`;

const ContactMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const ContactRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end; /* Changed to flex-end to push content to the right */
  min-width: 450px;

  @media (max-width: 1024px) {
    justify-content: flex-start !important; /* Change back to flex-start on smaller screens */
    min-width: 100%;
    margin: 30px 0;

  }
`;

const ContactLeft = styled.div`
  flex: 1;
  min-width: 450px;

    @media (max-width: 1024px) {
      min-width: 100%;
  
    }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactMain>
          <ContactLeft>
            <ContactInfo />
          </ContactLeft>
          <ContactRight>
            <ContactForm />
          </ContactRight>
        </ContactMain>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
