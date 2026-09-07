function Card({ id, imageUrl, imageAlt, title, onSelect }) {
  //
  const triggerSelect = (e) => {
    // pass the id of the crypto clicked upwards
    onSelect(id);
  };
  return (
    <figure className="card" role="button" onClick={triggerSelect}>
      <img src={imageUrl} alt={imageAlt} />
      <figcaption className="title">{title}</figcaption>
    </figure>
  );
}

export default Card;
