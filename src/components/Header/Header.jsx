import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src="/img/murcielago.png" alt="logo" width="45" height="35" />
        <div className="logo-text">
          <span className="logo-top">Báthory</span>
          <span className="logo-bottom">Books</span>
        </div>
      </div>
      <Nav />
    </header>
  );
};