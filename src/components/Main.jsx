import Card from "./Card";

function Main({ cryptos, loading, error, onCardSelect }) {
  if (loading) return <p>Loading images...</p>;
  if (error)
    return (
      <main>
        <p>Failure loading images, Network error</p>
      </main>
    );

  return (
    <main className="card-grid">
      {cryptos.map((crypto) => (
        <Card
          key={crypto.id}
          id={crypto.id}
          imageUrl={crypto.image}
          imageAlt={`${crypto.name} token symbol`}
          title={`${crypto.name} (${crypto.symbol.toUpperCase()})`}
          onSelect={onCardSelect}
        />
      ))}
    </main>
  );
}

export default Main;
