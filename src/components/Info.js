import React from "react";

function Info({ img, title, points }) {
  return (
    <div className="info">
      <img src={img} alt="gloves" className="info__img" />
      <div className="info__card">
        <h2 className="info__title">{title}</h2>
        <ul className="info__points">
          {points.map((point) => (
            <li className="info__point">{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Info;
