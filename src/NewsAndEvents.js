import React from 'react';
import './NewsAndEvents.css';

const NewsAndEvents = () => {
 return (
    <div className="news-and-events">
      <h1>News and Events</h1>
      <div className="news-items">
        <div className="news-item">
          <h2>Title of the News Item</h2>
          <p>Date of the Event</p>
          <p>Description of the Event</p>
        </div>
        {/* Add more news items here */}
      </div>
    </div>
 );
};

export default NewsAndEvents;