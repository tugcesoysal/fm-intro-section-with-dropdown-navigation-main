import "./App.css";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Overlay from "./Components/Overlay";
import { useState, useEffect } from "react";

function App() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const toggleNav = () => {
    setNavIsOpen(!navIsOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <header className="header">
        <img className="icon" src="/images/logo.svg" alt="logo" width={100} />
        {windowWidth < 760 && (
          <img
            className="icon-menu"
            alt="icon menu"
            src={
              navIsOpen
                ? "../images/icon-close-menu.svg"
                : "../images/icon-menu.svg"
            }
            onClick={toggleNav}
            width={navIsOpen ? 40 : 50}
          />
        )}
      </header>
      {(navIsOpen || windowWidth > 760) && <Nav />}
      <Main />
      {navIsOpen && <Overlay />}
    </div>
  );
}

export default App;
