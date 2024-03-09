import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plan, PlanEvent } from '../../types';
import Calendar from '../../components/Calendar'; // Importe o componente Calendar

const Home: React.FC = () => {
  const [events, setEvents] = useState<PlanEvent[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8080/api/planner');
      const formattedEvents = response.data.map((plan: Plan) => ({
        title: plan.title,
        start: plan.date,
        allDay: true,
        // ...
      }));
      setEvents(formattedEvents);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Calendar events={events} /> {/* Chame o componente Calendar e passe os eventos */}
    </div>
  );
};

export default Home;
