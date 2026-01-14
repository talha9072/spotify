// pages/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <>
      {/* Bootstrap + Font Awesome CDN (loaded only once even if multiple components use it) */}
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

      <footer className="bg-black text-secondary pt-5 pb-4">
        <div className="container">
          <div className="row g-5">
            {/* Column 1 - Company */}
            <div className="col-6 col-md-3">
              <h5 className="text-white fw-bold mb-3">Company</h5>
              <ul className="list-unstyled footer-links">
                <li><a href="#">About</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">For the Record</a></li>
              </ul>
            </div>

            {/* Column 2 - Communities */}
            <div className="col-6 col-md-3">
              <h5 className="text-white fw-bold mb-3">Communities</h5>
              <ul className="list-unstyled footer-links">
                <li><a href="#">For Artists</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Advertising</a></li>
                <li><a href="#">Investors</a></li>
                <li><a href="#">Vendors</a></li>
              </ul>
            </div>

            {/* Column 3 - Useful links */}
            <div className="col-6 col-md-3">
              <h5 className="text-white fw-bold mb-3">Useful links</h5>
              <ul className="list-unstyled footer-links">
                <li><a href="#">Support</a></li>
                <li><a href="#">Free Mobile App</a></li>
                <li><a href="#">Popular by Country</a></li>
                <li><a href="#">Import your music</a></li>
              </ul>
            </div>

            {/* Column 4 - Spotify Plans */}
            <div className="col-6 col-md-3">
              <h5 className="text-white fw-bold mb-3">Spotify Plans</h5>
              <ul className="list-unstyled footer-links">
                <li><a href="#">Premium Individual</a></li>
                <li><a href="#">Premium Duo</a></li>
                <li><a href="#">Premium Family</a></li>
                <li><a href="#">Premium Student</a></li>
                <li><a href="#">Spotify Free</a></li>
              </ul>
            </div>
          </div>

          {/* Social icons + copyright */}
          <div className="mt-5 pt-4 border-top border-dark">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">
              {/* Social icons */}
              <div className="social-links d-flex gap-4">
                <a href="#" className="social-icon" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>

              {/* Copyright */}
              <div className="text-center text-md-end small copyright">
                © {new Date().getFullYear()} Spotify AB
              </div>
            </div>
          </div>
        </div>

        {/* Custom styles scoped to this component */}
        <style jsx>{`
          footer {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          }

          .footer-links a {
            color: #b3b3b3;
            text-decoration: none;
            font-size: 0.95rem;
            line-height: 1.8;
            transition: color 0.2s ease;
          }

          .footer-links a:hover {
            color: white;
          }

          .social-links {
            font-size: 1.6rem;
          }

          .social-icon {
            color: #b3b3b3;
            transition: all 0.25s ease;
          }

          .social-icon:hover {
            color: white;
            transform: scale(1.15);
          }

          .copyright {
            color: #727272;
          }

          @media (max-width: 576px) {
            .footer-links a {
              font-size: 0.9rem;
            }
            .social-links {
              font-size: 1.4rem;
            }
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;