import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DriverProfile({ match }) {
  const [driver, setDriver] = useState(null);
  const driverId = match.params.id;

  useEffect(() => {
    axios.get(`/api/drivers/${driverId}`)
      .then(response => setDriver(response.data))
      .catch(error => console.error(error));
  }, [driverId]);

  if (!driver) return <div>Loading...</div>;

  return (
    <div>
      <h1>Driver Profile</h1>
      <p>Name: {driver.name}</p>
      <p>Contact: {driver.contact}</p>
      <p>License: {driver.license}</p>
      {/* Add form for editing driver information */}
    </div>
  );
}

export default DriverProfile;
