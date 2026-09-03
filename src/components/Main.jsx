import { useState, useEffect } from "react";
import Card from "./Card";

function Main() {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const PROXY_URL = "/coingecko-api";
    const API_KEY = import.meta.env.VITE_MEMORY_API_KEY;

    fetch(
      `${PROXY_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1`,
      {
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": API_KEY,
        },
      },
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCryptos(data);
        console.log(data);
      })
      .catch((err) => {
        console.error("Error fetching images:", err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading images...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <main className="card-grid">
      {cryptos.map((crypto) => (
        <Card
          key={crypto.id}
          imageUrl={crypto.image}
          imageAlt={`${crypto.name} token symbol`}
          title={`${crypto.name} (${crypto.symbol.toUpperCase()})`}
        />
      ))}
    </main>
  );
}

export default Main;
