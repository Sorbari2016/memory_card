import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/general.css";
import "./styles/header.css";
import "./styles/main.css";
import Main from "./components/Main.jsx";

function App() {
  return (
    <>
      <Header score={2} bestScore={4} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
