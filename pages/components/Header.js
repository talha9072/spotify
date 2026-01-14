// pages/components/Header.js

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    router.push('/login');
  };

  return (
    <>
      {/* Bootstrap 5 & Font Awesome */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />

      <nav className="navbar navbar-expand-lg bg-black navbar-dark shadow-sm sticky-top">
        <div className="container-fluid px-3 px-md-4">
          {/* Logo + Home Icon */}
          <div className="d-flex align-items-center gap-3 gap-md-4">
            <a href="/" className="spotify-logo fs-2 fs-md-1 text-success">
              <i className="fab fa-spotify"></i>
            </a>
            <a href="/" className="text-white fs-4">
              <i className="fas fa-home"></i>
            </a>
          </div>

          {/* Search Bar (desktop only) */}
          <div className="search-container mx-4 flex-grow-1 d-none d-lg-flex justify-content-center">
            <div
              className="d-flex align-items-center bg-dark rounded-pill px-4 py-2 w-100"
              style={{ maxWidth: '600px', backdropFilter: 'blur(8px)' }}
            >
              <i className="fas fa-search text-secondary me-3"></i>
              <span className="text-secondary flex-grow-1">What do you want to play?</span>
              <span className="text-secondary mx-3">|</span>
              <i className="fas fa-window-maximize text-secondary"></i>
            </div>
          </div>

          {/* Right Side Links + Logout */}
          <div className="d-flex align-items-center gap-3 gap-md-4 ms-auto">
            <a href="#" className="nav-link text-secondary fw-medium d-none d-md-block hover-link">
              Premium
            </a>
            <a href="#" className="nav-link text-secondary fw-medium d-none d-md-block hover-link">
              Support
            </a>
            <a href="#" className="nav-link text-secondary fw-medium d-none d-md-block hover-link">
              Download
            </a>

            <span className="text-white d-none d-md-block">|</span>

            <a
              href="#"
              className="d-flex align-items-center text-secondary fw-medium hover-link"
            >
              <i className="far fa-circle-down me-2"></i>
              <span className="d-none d-md-inline">Install app</span>
            </a>

            {/* Conditional Button */}
            {isLoggedIn ? (
              <button
                className="btn btn-outline-light rounded-pill px-3 px-md-4 py-2 fw-medium"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <a
                href="/login"
                className="btn btn-outline-light rounded-pill px-3 px-md-4 py-2 fw-medium"
              >
                Log in
              </a>
            )}
          </div>

          {/* Mobile Burger */}
          <button
            className="navbar-toggler ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Mobile Collapsed Menu */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="d-lg-none mt-4 pb-3">
              {/* Mobile Search */}
              <div className="searchbar d-flex align-items-center bg-dark rounded-pill px-4 py-3 mb-4">
                <i className="fas fa-search text-secondary me-3"></i>
                <span className="text-secondary flex-grow-1">What do you want to play?</span>
                <i className="fas fa-window-maximize text-secondary ms-3"></i>
              </div>

              {/* Mobile Links */}
              <div className="d-flex flex-column gap-3 text-center">
                <a href="#" className="text-secondary fw-medium py-2">Premium</a>
                <a href="#" className="text-secondary fw-medium py-2">Support</a>
                <a href="#" className="text-secondary fw-medium py-2">Download</a>
                <a href="#" className="text-secondary fw-medium py-2 d-flex align-items-center justify-content-center">
                  <i className="far fa-circle-down me-2"></i>
                  Install app
                </a>

                {/* Conditional Logout / Login */}
                {isLoggedIn ? (
                  <button
                    className="btn btn-outline-light rounded-pill py-2 mt-2 fw-medium"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <a
                    href="/login"
                    className="btn btn-outline-light rounded-pill py-2 mt-2 fw-medium"
                  >
                    Log in
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Scoped Styles */}
      <style jsx>{`
        .spotify-logo {
          color: #1ed760 !important;
          transition: transform 0.25s ease;
        }
        .spotify-logo:hover {
          transform: scale(1.12);
        }

        .searchbar {
          background: rgba(40, 40, 40, 0.85);
          max-width: 520px;
          transition: all 0.25s ease;
        }
        .searchbar:hover {
          background: rgba(60, 60, 60, 0.9);
        }

        .hover-link {
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .hover-link:hover {
          color: white !important;
          transform: translateY(-2px);
        }

        .btn-outline-light {
          transition: all 0.25s ease;
        }
        .btn-outline-light:hover {
          background: rgba(255,255,255,0.15);
          transform: translateY(-2px);
        }

        @media (max-width: 991px) {
          .search-container {
            display: none !important;
          }
        }

        @media (max-width: 576px) {
          nav {
            padding: 0.6rem 1rem !important;
          }
        }
      `}</style>
    </>
  );
}