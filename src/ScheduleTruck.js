import React, { useState } from 'react';
import axios from 'axios';

function ScheduleTruck() {
  const [truckId, setTruckId] = useState('');
  const [route, setRoute] = useState('');
  const [driver, setDriver] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = () => {
    axios.post('/api/schedule', { truckId, route, driver, startTime, endTime })
      .then(response => alert('Truck scheduled successfully!'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Schedule Truck</h1>
      <form>
        <input type="text" placeholder="Truck ID" value={truckId} onChange={(e) => setTruckId(e.target.value)} />
        <input type="text" placeholder="Route" value={route} onChange={(e) => setRoute(e.target.value)} />
        <input type="text" placeholder="Driver" value={driver} onChange={(e) => setDriver(e.target.value)} />
        <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default ScheduleTruck;
