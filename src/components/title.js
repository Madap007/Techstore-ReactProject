import React from 'react'
import './title.css';

function Title({ title, center }) {
  return (
    <div className={`title-wrapper ${center ? 'center' : ''}`}>
      <div className="col">
        <h2 className="text-title">{title}</h2>
        <div className="title-underline"></div>
      </div>
    </div>
  );
}

export default Title;