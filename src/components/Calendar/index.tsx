import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import { PlanEvent } from '../../types';

const Calendar: React.FC<{ events: PlanEvent[] }> = ({ events }) => { // Receba os eventos como prop
  return (
    <FullCalendar
      plugins={[dayGridPlugin, bootstrap5Plugin ]}
      themeSystem='bootstrap5'
      initialView="dayGridMonth"
      events={events} // Utilize os eventos recebidos
      headerToolbar={{
        left: '',
        center: 'title',
        right: 'prev,next today',
      }}
    />
  );
};

export default Calendar;
