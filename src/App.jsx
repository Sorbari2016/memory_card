import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import { shuffle } from "../utilities/utility.js";
import "./styles/general.css";
import "./styles/header.css";
import "./styles/main.css";

function App() {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [selectedCryptos, setSelectedCryptos] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [scores, setScores] = useState([0]);
  const [bestScore, setBestScore] = useState(Math.max(...scores, currentScore));

  // fetch crypto data
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
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      })
      .then((data) => setCryptos(data))
      .catch((err) => {
        console.error("Error fetching images:", err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  // create method to shuffle the crypto array state
  const shuffleCards = () => {
    setCryptos((prevCryptos) => shuffle([...prevCryptos]));
  };

  const handleCardClick = (cryptoId) => {
    if (selectedCryptos.includes(cryptoId)) {
      // game Over!
      setScores((prevScores) => [...prevScores, currentScore]);
      setBestScore((prevBestScore) => Math.max(...scores, currentScore));
      setCurrentScore(0);
      setSelectedCryptos([]);
    } else {
      // correct Choice!
      setSelectedCryptos((prevSelected) => [...prevSelected, cryptoId]);
      setCurrentScore((prevScore) => prevScore + 1);
    }

    // reshuffle the cards
    shuffleCards();
  };

  return (
    <>
      <Header score={currentScore} bestScore={bestScore} />
      <Main
        cryptos={cryptos}
        loading={loading}
        error={error}
        onCardSelect={handleCardClick}
      />
      <Footer />
    </>
  );
}

export default App;
