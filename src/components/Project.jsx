export default function Project(props) {
const { name, description, link, image } = props;

return (
  <div className="card">
    <img src={image} className="card-img-top" alt={name} />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{description}</p>
      <a href={link} className="btn btn-primary">View</a>
    </div>
  </div>
);
}