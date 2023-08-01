import React from 'react';
import styled from 'styled-components';

const ContactInfoContainer = styled.div`
  flex: 1;
  color: #fefef9;
  line-height: 1.8;


   h2 {
    line-height:50px;
   }

  a {
    display: inline-flex;
    align-items: center;
    font-size: 1.25rem;
    transition: color 0.2s ease;
    /* Set icons and links to white color */
    color: #fefef9;

    svg {
      /* Adjust icon size proportionally */
      width: 1.25rem;
      height: 1.25rem;
      margin-right: 0.5rem;
    }

    &:hover {
      opacity: 0.5;
    }
  }
`;

const ContactInfo = () => {
  return (

          <ContactInfoContainer>
            <p className="font-medium">
              Contact
            </p><br/>

            <h2 className="font-large">
              Let's Solve It Together!            
            </h2><br />
            
            <p className="font-small">
              Got a challenge to tackle or a dream website to bring to life? Share your ideas, and I'll make it a reality!
            </p><br />




            {/* Updated email address */}
            <a href="mailto:fan.alfredo@gmail.com" title="Contact me" 
            style={{ 
              fontSize:'16px', 
              textDecoration:'none',
              }}>
              <svg
                aria-hidden="true"
                className="h-5 inline w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{color: '#fff !important',}}
              >
                <path
                  d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
                ></path>
                <path
                  d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
                ></path>
              </svg>
              fan.alfredo@gmail.com
            </a>
          </ContactInfoContainer>
       
  );
};

export default ContactInfo;