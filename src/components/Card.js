import React from "react";
import "../styles/Card.css";
import { Link } from "react-router-dom";

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <Link to={"/"}>
        <div
          className="card-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="card-title">{title}</div>
      </Link>
    </div>
  );
};

export default Card;
