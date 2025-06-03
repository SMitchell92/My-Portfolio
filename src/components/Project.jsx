import React from "react";
export default function Project(props) {
const { name, description, link, image } = props;

return (
  <a href={link} className="btn btn-primary">
    <img src={image} className="card-img-top" alt={name} />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{description}</p>
    </div>

  </a>
);
}