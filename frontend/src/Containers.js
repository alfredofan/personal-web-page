// Containers.js
import styled from 'styled-components';


export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const SmallContainer = styled.div`
  max-width: 768px;
`;

export const MediumContainer = styled.div`
  max-width: 992px;
  

`;

export const LargeContainer = styled.div`
  max-width: 1400px;
`;

export const FullContainer = styled.div`
width: 100% !important;
display: flex;
justify-content: center!important;
align-items: center!important;
padding: 0;
overflow: hidden;
-webkit-overflow-scrolling: touch; /* Disable horizontal overflow for Safari */
`;

export const StyledFullContainer = styled.div`
width: 100% !important;
overflow: hidden;
-webkit-overflow-scrolling: touch; /* Disable horizontal overflow for Safari */

display: flex;
justify-content: center!important;
align-items: center!important;
padding: 0;
  background-color: #f5f5f5; /* Adjust the background color as needed */
  border-radius: 8px; /* Adjust the border radius as needed */
  box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px, inset rgba(0, 0, 0, 0.15) 0px -5px 15px;

  /* Add additional styles as needed for the content inside the container */
  
`;


// PageContainers

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height:100vh;

`;

export const PageSmallContainer = styled.div`
  max-width: 768px;
  height:100vh;

`;

export const PageMediumContainer = styled.div`
  max-width: 992px;
  height:100vh;

`;

export const PageLargeContainer = styled.div`
  max-width: 1400px;
  height:100vh;

`;

export const PageFullContainer = styled.div`
  width: 100% !important;
  height:107.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
