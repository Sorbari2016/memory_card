import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/general.css";
import "./styles/header.css";
import "./styles/main.css";

function App() {
  return (
    <>
      <Header score={2} bestScore={4} />
      <Footer />
    </>
  );
}

export default App;
