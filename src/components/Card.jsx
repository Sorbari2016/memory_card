function Card({ imageUrl, imageAlt, title }) {
  return (
    <figure className="card">
      <img src={imageUrl} alt={imageAlt} />
      <figcaption className="title">{title}</figcaption>
    </figure>
  );
}

export default Card;
