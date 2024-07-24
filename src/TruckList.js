import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TruckList() {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    axios.get('/api/trucks')
      .then(response => setTrucks(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Truck List</h1>
      <ul>
        {trucks.map(truck => (
          <li key={truck.id}>{truck.name} - {truck.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default TruckList;
