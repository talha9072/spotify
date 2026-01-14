// pages/components/Header.js

export default function Header() {
  return (
    <div className="navbar">
      <div className="spotifyicon">
        <i className="fa-brands fa-spotify"></i>
      </div>

      <div className="homeicon">
        <i className="fa-solid fa-house"></i>
      </div>

      <div className="searchbar">
        <div className="searchicon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        What do you want to play?
        <div className="browseicon">
          | <i className="fa-solid fa-window-maximize"></i>
        </div>
      </div>

      <div className="pre transition">premium</div>

      <div className="sec transition">support</div>

      <div className="third transition">Download</div>

      <div className="slash">|</div>

      <div className="installicon">
        <i className="fa-regular fa-circle-down"></i>
        install app
      </div>

      <div className="signup">signup</div>

      <button>log in</button>
    </div>
  );
}