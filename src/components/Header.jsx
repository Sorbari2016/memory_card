const Header = () => {
  return (
    <header id="main-header">
      <a href="/" className="btn-home">
        <svg
          width="148"
          height="42"
          viewBox="0 0 148 42"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" y="0" width="148" height="42" rx="21" fill="#a6854a" />
          <g transform="translate(16, 10) scale(0.32)">
            <path
              d="M0 0 h26 l12 12 v36 a4 4 0 0 1 -4 4 h-30 a4 4 0 0 1 -4 -4 v-44 a4 4 0 0 1 4 -4 z"
              fill="#FFFFFF"
            />
            <path d="M26 0 v12 h12 z" fill="#a6854a" opacity="0.35" />
            <line
              x1="8"
              y1="20"
              x2="30"
              y2="20"
              stroke="#a6854a"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <line
              x1="8"
              y1="28"
              x2="30"
              y2="28"
              stroke="#a6854a"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <line
              x1="8"
              y1="36"
              x2="22"
              y2="36"
              stroke="#a6854a"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </g>
          <text
            x="46"
            y="26"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="14.5"
            fontWeight="600"
            fill="#FFFFFF"
          >
            Clare CV
          </text>
        </svg>
      </a>

      <div className="profile-btn">
        <button type="button">My Account</button>
      </div>
    </header>
  );
};

export default Header;
