// pages/components/Header.js

export default function Header() {
  return (
    <>
      {/* Load Bootstrap & Font Awesome only once */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <nav
        className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm"
        style={{
          backgroundColor: "#000",
          borderBottom: "1px solid #282828",
          padding: "0.8rem 1.5rem",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div className="container-fluid">
          {/* Logo + Home */}
          <div className="d-flex align-items-center gap-4">
            <a href="#" className="spotify-logo text-success fs-1">
              <i className="fab fa-spotify"></i>
            </a>

            <a href="#" className="home-icon text-white fs-4">
              <i className="fas fa-home"></i>
            </a>
          </div>

          {/* Search Bar - Collapses on mobile */}
          <div className="search-container mx-auto d-none d-lg-flex align-items-center">
            <div className="searchbar d-flex align-items-center bg-dark rounded-pill px-4 py-2">
              <i className="fas fa-search text-secondary me-3"></i>
              <span className="text-secondary me-4">What do you want to play?</span>
              <span className="text-secondary">|</span>
              <i className="fas fa-window-maximize text-secondary ms-3"></i>
            </div>
          </div>

          {/* Right side links & Install */}
          <div className="d-flex align-items-center gap-4 ms-auto">
            <a href="#" className="nav-link premium-link text-secondary fw-medium">
              Premium
            </a>
            <a href="#" className="nav-link text-secondary fw-medium">
              Support
            </a>
            <a href="#" className="nav-link text-secondary fw-medium">
              Download
            </a>

            <span className="text-white fs-5 mx-2">|</span>

            <a href="#" className="install-app d-flex align-items-center text-secondary fw-medium">
              <i className="far fa-circle-down me-2"></i>
              Install app
            </a>

            <a href="/register" className="signup-link text-white fw-medium px-4 py-2 rounded-pill signup-btn">
              Sign up
            </a>
          </div>

          {/* Mobile toggle (hamburger) */}
          <button
            className="navbar-toggler ms-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible content for mobile */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="d-lg-none mt-4">
              {/* Search bar on mobile */}
              <div className="searchbar d-flex align-items-center bg-dark rounded-pill px-4 py-2 mb-4">
                <i className="fas fa-search text-secondary me-3"></i>
                <span className="text-secondary flex-grow-1">What do you want to play?</span>
                <i className="fas fa-window-maximize text-secondary ms-3"></i>
              </div>

              {/* Links on mobile */}
              <div className="d-flex flex-column gap-3">
                <a href="#" className="text-secondary fw-medium">Premium</a>
                <a href="#" className="text-secondary fw-medium">Support</a>
                <a href="#" className="text-secondary fw-medium">Download</a>
                <a href="#" className="text-secondary fw-medium d-flex align-items-center">
                  <i className="far fa-circle-down me-2"></i>
                  Install app
                </a>
                <a href="/register" className="btn btn-outline-light rounded-pill mt-2">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Custom styles */}
      <style jsx>{`
        .spotify-logo {
          color: #1ed760 !important;
          transition: transform 0.2s;
        }
        .spotify-logo:hover {
          transform: scale(1.1);
        }

        .searchbar {
          background: #282828;
          max-width: 500px;
          width: 100%;
          transition: all 0.2s;
        }
        .searchbar:hover {
          background: #333;
        }

        .premium-link,
        .signup-link {
          transition: color 0.2s, transform 0.2s;
        }
        .premium-link:hover,
        .signup-link:hover {
          color: white !important;
          transform: translateY(-1px);
        }

        .signup-btn {
          background: white;
          color: black !important;
          font-weight: 600;
          transition: all 0.25s;
        }
        .signup-btn:hover {
          background: #f0f0f0;
          transform: scale(1.05);
        }

        .social-icon:hover,
        .install-app:hover {
          color: white !important;
        }

        @media (max-width: 991px) {
          .search-container {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}