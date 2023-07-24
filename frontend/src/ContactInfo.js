import React from 'react';
import styled from 'styled-components';

const ContactInfoContainer = styled.div`
  flex: 1;

  h2 {
    font-size: 3rem;
    color: #fefef9;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    color: #fefef9;
    line-height: 1.8;
    font-size: 1.25rem;

  }

  a {
    display: inline-flex;
    align-items: center;
    font-size: 1.25rem;
    color: #fefef9;
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
      color: #000;
    }
  }
`;

const ContactInfo = () => {
  return (

          <ContactInfoContainer>
            <p className="">
              Contact
            </p>
            <h2 className="">
            Let's Solve It Together!            </h2>
            <p className="">
            Got a challenge to tackle or a dream website to bring to life? Share your ideas, and I'll make it a reality!    <br></br>




        </p>
            {/* Updated email address */}
            <a href="mailto:fan.alfredo@gmail.com" title="Contact me">
              <svg
                aria-hidden="true"
                className="h-5 inline w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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