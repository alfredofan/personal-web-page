import React from 'react';
import { useDeviceOrientation } from './hooks/useDeviceOrientation.ts'; // Update the path to the correct location

const OrientationToggle = () => {
  const { orientation, requestAccess, revokeAccess, error } = useDeviceOrientation();

  const handleToggle = () => {
    if (orientation) {
      revokeAccess();
    } else {
      requestAccess();
    }
  };

  return (
    <button onClick={handleToggle}>
      {orientation ? 'Revoke Orientation Access' : 'Request Orientation Access'}
    </button>
  );
};

export default OrientationToggle;
