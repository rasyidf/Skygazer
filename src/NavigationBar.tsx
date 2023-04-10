import React from 'react';


export function NavigationBar() {
  return (
    <div>
      <ul>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/observation-log">Observation Log</a></li>
        <li><a href="/sky-events-calendar">Sky Events Calendar</a></li>
        <li><a href="/telescope-calculator">Telescope Calculator</a></li>
        <li><a href="/options">Options</a></li>
      </ul>
    </div>
  );
}
