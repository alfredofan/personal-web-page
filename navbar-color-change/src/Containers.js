// Containers.js

import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const SmallContainer = styled(Container)`
  max-width: 768px;
`;

export const MediumContainer = styled(Container)`
  max-width: 992px;
`;

export const LargeContainer = styled(Container)`
  max-width: 1400px;
`;

export const FullContainer = styled(Container)`
  max-width: 100vh;
`;