const Hero = ({ onClick }) => {
  return (
    <div id="hero">
      <section className="left">
        <div className="headings">
          <p className="eyebrow">Free Online CV Builder</p>
          <h1>Build a resume that gets you hired, at no cost</h1>
        </div>
        <p className="subtitle">
          Get started in minutes — no credit card required.
        </p>
        <button className="btn-cta" onClick={onClick}>
          Create a New CV
        </button>
      </section>

      <section className="right">
        <div className="sample-container">
          <div className="sample">
            <img src="#" alt="Sample CV" />
            {/* fallback text while no image */}
            <span className="placeholder-text">
              placeholder: image of my last cv
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
