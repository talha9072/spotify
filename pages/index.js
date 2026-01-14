// app/page.tsx

import Head from 'next/head';
import Header from './components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>spotify By Laiqa Qamar</title>

        {/* Your custom stylesheet – make sure style.css exists in public/ or use module css */}
        {/* <link rel="stylesheet" href="/style.css" /> */}

        {/* Font Awesome – version 6.5.2 (latest stable as of now) */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <Header />

      <div className="all">
        <div className="sidebar">
          <div className="one">
            <div className="lib">your library</div>
            <div className="plus">+</div>
          </div>

          <div className="seco">
            <div className="first">
              <div className="ak">Create your first playlist</div>
              <div className="do">it's easy. we'll help you.</div>
              <div className="bt">
                <button className="side">Create playlist</button>
              </div>
            </div>

            <div className="two">
              <div className="ak">Let's find some podcasts to follow</div>
              <div className="do">we'll keep you updated on new episodes</div>
              <div className="bt">
                <button className="side">Browse podcasts</button>
              </div>
            </div>
          </div>

          <div className="lastsidediv">
            <div className="lastopts">
              <a href="#">Legal</a>
              <a href="#">Safety & Privacy Center</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookies</a>
              <a href="#">About Ads</a>
              <a href="#">Accessibility</a>

              <div className="btn">
                <i className="fa-solid fa-globe"></i>English
              </div>
            </div>
          </div>
        </div>

        <div className="maincontent">
          <div className="divone">
            <h2 className="trend">Trending songs</h2>
            <p className="show">Show all</p>
          </div>

          <div className="songs">
            <div className="block">
              <img src="regardless.webp" alt="song1" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">
                  Regardless
                </a>
                <br />
                <a href="#" className="lanetwo">
                  Asim Azhar
                </a>
              </div>
            </div>

            <div className="block">
              <img src="saiyaara.webp" alt="song1" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">
                  Saiyara
                </a>
                <br />
                <a href="#" className="lanetwo">
                  krish kapoor
                </a>
              </div>
            </div>

            <div className="block">
              <img src="tum ho toh.webp" alt="song1" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">
                  Tum Ho Toh
                </a>
                <br />
                <a href="#" className="lanetwo">
                  vishal
                </a>
              </div>
            </div>

            <div className="block">
              <img src="barbaad.webp" alt="song1" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">
                  Barbaad
                </a>
                <br />
                <a href="#" className="lanetwo">
                  julien
                </a>
              </div>
            </div>

            <div className="block">
              <img src="takeiteasy.webp" alt="song1" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">
                  Take it Easy
                </a>
                <br />
                <a href="#" className="lanetwo">
                  Karan Aujla
                </a>
              </div>
            </div>

            <div className="block">
              <img src="exes.webp" alt="song1" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">
                  Exes
                </a>
                <br />
                <a href="#" className="lanetwo">
                  Hassan Rahem
                </a>
              </div>
            </div>

            <div className="block">
              <img src="arz kiya hy.webp" alt="song1" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">
                  Arz Kia Hy
                </a>
                <br />
                <a href="#" className="lanetwo">
                  Coke Studio
                </a>
              </div>
            </div>
          </div>

          <div className="divone">
            <h2 className="Artist">Popular Artist</h2>
            <p className="show">Show all</p>
          </div>

          <div className="artist">
            <div className="block">
              <img src="atif aslam.webp" alt="song1" className="imeg" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">
                  Atif Aslam
                </a>
                <br />
                <a href="#" className="lanetwo">
                  Artist
                </a>
              </div>
            </div>

            <div className="block">
              <img src="ap dhillon.webp" alt="song1" className="imeg" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">
                  AP Dhillon
                </a>
                <br />
                <a href="#" className="lanetwo">
                  Artist
                </a>
              </div>
            </div>

            <div className="block">
              <img src="karan aujla.webp" alt="song1" className="imeg" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">
                  Karan Aujla
                </a>
                <br />
                <a href="#" className="lanetwo">
                  Artist
                </a>
              </div>
            </div>

            <div className="block">
              <img src="parmish verma.webp" alt="song1" className="imeg" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">
                  Parmish Verma
                </a>
                <br />
                <a href="#" className="lanetwo">
                  Artist
                </a>
              </div>
            </div>

            <div className="block">
              <img src="nehaal.webp" alt="song1" className="imeg" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">
                  Nehaal Naseem
                </a>
                <br />
                <a href="#" className="lanetwo">
                  Artist
                </a>
              </div>
            </div>

            <div className="block">
              <img src="aima.webp" alt="song1" className="imeg" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">
                  Aima Baig
                </a>
                <br />
                <a href="#" className="lanetwo">
                  Artist
                </a>
              </div>
            </div>

            <div className="block">
              <img src="ali zafar.webp" alt="song1" className="imeg" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">
                  Ali zafar
                </a>
                <br />
                <a href="#" className="lanetwo">
                  Artist
                </a>
              </div>
            </div>
          </div>

          <div className="divone">
            <h2 className="Artist">Popular Album</h2>
            <p className="show">Show all</p>
          </div>

          <div className="album">
            <div className="block">
              <img src="jhol.webp" alt="song1" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">
                  JHOL
                </a>
                <br />
                <a href="#" className="lanetwo">
                  maanu,anural khalid
                </a>
              </div>
            </div>

            <div className="block">
              <img src="okay stfu.webp" alt="song1" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">
                  OKAY STFU
                </a>
                <br />
                <a href="#" className="lanetwo">
                  Ap Dhillon
                </a>
              </div>
            </div>

            <div className="block">
              <img src="making memories.webp" alt="song1" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">
                  Making Memories
                </a>
                <br />
                <a href="#" className="lanetwo">
                  Karan Aujla
                </a>
              </div>
            </div>

            <div className="block">
              <img src="pal pal.webp" alt="song1" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">
                  PalPal
                </a>
                <br />
                <a href="#" className="lanetwo">
                  Alisoomromusic
                </a>
              </div>
            </div>

            <div className="block">
              <img src="afsoos.webp" alt="song1" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">
                  Afsoos
                </a>
                <br />
                <a href="#" className="lanetwo">
                  Anuv jain,Ap Dhillon
                </a>
              </div>
            </div>

            <div className="block">
              <img src="sicario.webp" alt="song1" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">
                  Sicario
                </a>
                <br />
                <a href="#" className="lanetwo">
                  Shubh
                </a>
              </div>
            </div>

            <div className="block">
              <img src="safar.webp" alt="song1" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">
                  Safar
                </a>
                <br />
                <a href="#" className="lanetwo">
                  bayan
                </a>
              </div>
            </div>
          </div>

          <footer>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Jobs</a>
              <a href="#">For the Record</a>
            </div>

            <div className="footer-col">
              <h4>Communities</h4>
              <a href="#">For Artists</a>
              <a href="#">Developers</a>
              <a href="#">Advertising</a>
              <a href="#">Investors</a>
              <a href="#">Vendors</a>
            </div>

            <div className="footer-col">
              <h4>Useful links</h4>
              <a href="#">Support</a>
              <a href="#">Free Mobile App</a>
              <a href="#">Popular by Country</a>
              <a href="#">Import your music</a>
            </div>

            <div className="footer-col">
              <h4>Spotify Plans</h4>
              <a href="#">Premium Individual</a>
              <a href="#">Premium Duo</a>
              <a href="#">Premium Family</a>
              <a href="#">Premium Student</a>
              <a href="#">Spotify Free</a>
            </div>

            <div className="social-links">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>

            <div className="lastfoot">© 2025 Spotify AB</div>
          </footer>
        </div>
      </div>
    </>
  );
}