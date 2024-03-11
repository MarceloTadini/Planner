import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plan } from '../../types';
import ToDo from '../../components/ToDo';

const Home: React.FC = () => {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8080/api/planner');
      setPlans(response.data as Plan[]); // Type cast response data to Plan[]
    };
    fetchData();
  }, []);

  const formatDate = (date: Date) => {
    // Use toLocaleDateString for "dd/mm/yyyy" format (customizable)
    return new Date(date).toLocaleDateString('pt-BR'); // Adjust locale for 'pt-BR'
  };

  return (
    <div>
      <h1>Home</h1>
      <ToDo></ToDo>
      {plans.map((plan) => (
        <div key={plan._id}>
          <h2>{plan.title}</h2>
          <p>{plan.description}</p>
          <p>{plan.location}</p>
          <p>{plan.participant}</p>
          <p>{formatDate(plan.date)}</p>
          {/* Display other plan details as needed */}
        </div>
      ))}
    </div>
  );
};

export default Home;
