// pages/index.js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (from your login logic)
    const user = localStorage.getItem('user');

    if (!user) {
      // Not logged in → redirect to login
      router.replace('/login');
    } else {
      // Logged in → show content
      setIsAuthenticated(true);
    }

    setLoading(false);
  }, [router]);

  // Show loading spinner while checking auth
  if (loading) {
    return (
      <div className="vh-100 d-flex align-items-center justify-content-center bg-black">
        <div className="spinner-border text-success" role="status" style={{ width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // If not authenticated → this won't render (redirect already happened)
  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Spotify By Laiqa Qamar</title>

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
        {/* Sidebar */}
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
                <i className="fa-solid fa-globe"></i> English
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="maincontent">
          <div className="divone">
            <h2 className="trend">Trending songs</h2>
            <p className="show">Show all</p>
          </div>

          <div className="songs">
            <div className="block">
              <img src="/regardless.webp" alt="Regardless" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">Regardless</a>
                <br />
                <a href="#" className="lanetwo">Asim Azhar</a>
              </div>
            </div>

            <div className="block">
              <img src="/saiyaara.webp" alt="Saiyara" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">Saiyara</a>
                <br />
                <a href="#" className="lanetwo">krish kapoor</a>
              </div>
            </div>

            <div className="block">
              <img src="/tum ho toh.webp" alt="Tum Ho Toh" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">Tum Ho Toh</a>
                <br />
                <a href="#" className="lanetwo">vishal</a>
              </div>
            </div>

            <div className="block">
              <img src="/barbaad.webp" alt="Barbaad" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">Barbaad</a>
                <br />
                <a href="#" className="lanetwo">julien</a>
              </div>
            </div>

            <div className="block">
              <img src="/takeiteasy.webp" alt="Take it Easy" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">Take it Easy</a>
                <br />
                <a href="#" className="lanetwo">Karan Aujla</a>
              </div>
            </div>

            <div className="block">
              <img src="/exes.webp" alt="Exes" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">Exes</a>
                <br />
                <a href="#" className="lanetwo">Hassan Rahem</a>
              </div>
            </div>

            <div className="block">
              <img src="/arz kiya hy.webp" alt="Arz Kia Hy" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">Arz Kia Hy</a>
                <br />
                <a href="#" className="lanetwo">Coke Studio</a>
              </div>
            </div>
          </div>

          <div className="divone">
            <h2 className="Artist">Popular Artist</h2>
            <p className="show">Show all</p>
          </div>

          <div className="artist">
            <div className="block">
              <img src="/atif aslam.webp" alt="Atif Aslam" className="imeg" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">Atif Aslam</a>
                <br />
                <a href="#" className="lanetwo">Artist</a>
              </div>
            </div>

            <div className="block">
              <img src="/ap dhillon.webp" alt="AP Dhillon" className="imeg" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">AP Dhillon</a>
                <br />
                <a href="#" className="lanetwo">Artist</a>
              </div>
            </div>

            <div className="block">
              <img src="/karan aujla.webp" alt="Karan Aujla" className="imeg" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">Karan Aujla</a>
                <br />
                <a href="#" className="lanetwo">Artist</a>
              </div>
            </div>

            <div className="block">
              <img src="/parmish verma.webp" alt="Parmish Verma" className="imeg" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">Parmish Verma</a>
                <br />
                <a href="#" className="lanetwo">Artist</a>
              </div>
            </div>

            <div className="block">
              <img src="/nehaal.webp" alt="Nehaal Naseem" className="imeg" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">Nehaal Naseem</a>
                <br />
                <a href="#" className="lanetwo">Artist</a>
              </div>
            </div>

            <div className="block">
              <img src="/aima.webp" alt="Aima Baig" className="imeg" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">Aima Baig</a>
                <br />
                <a href="#" className="lanetwo">Artist</a>
              </div>
            </div>

            <div className="block">
              <img src="/ali zafar.webp" alt="Ali Zafar" className="imeg" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">Ali zafar</a>
                <br />
                <a href="#" className="lanetwo">Artist</a>
              </div>
            </div>
          </div>

          <div className="divone">
            <h2 className="Artist">Popular Album</h2>
            <p className="show">Show all</p>
          </div>

          <div className="album">
            <div className="block">
              <img src="/jhol.webp" alt="JHOL" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">JHOL</a>
                <br />
                <a href="#" className="lanetwo">maanu, anural khalid</a>
              </div>
            </div>

            <div className="block">
              <img src="/okay stfu.webp" alt="OKAY STFU" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">OKAY STFU</a>
                <br />
                <a href="#" className="lanetwo">Ap Dhillon</a>
              </div>
            </div>

            <div className="block">
              <img src="/making memories.webp" alt="Making Memories" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">Making Memories</a>
                <br />
                <a href="#" className="lanetwo">Karan Aujla</a>
              </div>
            </div>

            <div className="block">
              <img src="/pal pal.webp" alt="PalPal" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">PalPal</a>
                <br />
                <a href="#" className="lanetwo">Alisoomromusic</a>
              </div>
            </div>

            <div className="block">
              <img src="/afsoos.webp" alt="Afsoos" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">Afsoos</a>
                <br />
                <a href="#" className="lanetwo">Anuv jain, Ap Dhillon</a>
              </div>
            </div>

            <div className="block">
              <img src="/sicario.webp" alt="Sicario" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">Sicario</a>
                <br />
                <a href="#" className="lanetwo">Shubh</a>
              </div>
            </div>

            <div className="block">
              <img src="/safar.webp" alt="Safar" className="imgc" />
              <div className="play-button">▶</div>
              <div className="line">
                <a href="#" className="laneone">Safar</a>
                <br />
                <a href="#" className="lanetwo">bayan</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}