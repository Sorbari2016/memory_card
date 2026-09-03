// Create a Header component
function Header({ score, bestScore }) {
  return (
    <header id="main-header">
      <div className="header-top">
        <h1 className="header-title">Crypto Coin Memory Game</h1>
        <div className="score-card">
          {/* output tag: used to display the result of a calculation or a user action */}
          <div>
            Score: <output id="current-score">{score}</output>
          </div>
          <div>
            Best Score: <output id="best-score">{bestScore}</output>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <span className="game-info">
          Get a point by selecting a unique image.
        </span>
      </div>
    </header>
  );
}

export default Header;
