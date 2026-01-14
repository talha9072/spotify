// pages/register/index.js
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { supabase } from "../../lib/supabase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleRegister = async () => {
    setError(null);

    if (!email.trim() || !password.trim()) {
      setError("Please fill in all fields");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);

    try {
      const { data: existing } = await supabase
        .from("users")
        .select("id")
        .eq("email", email.trim().toLowerCase())
        .maybeSingle();

      if (existing) {
        setError("This email is already taken");
        return;
      }

      const { error } = await supabase.from("users").insert({
        email: email.trim().toLowerCase(),
        pass: password,
      });

      if (error) throw error;

      alert("Account created successfully!");
      router.push("/login");
    } catch (err) {
      setError("Failed to create account. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Sign Up - Music Hub</title>
        <meta name="description" content="Create your account" />
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
      </Head>

      <div
        className="min-vh-100 d-flex align-items-center justify-content-center px-3 py-5"
        style={{
          backgroundImage: `url('/bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="w-100" style={{ maxWidth: "420px" }}>
          <div
            className="rounded-4 shadow-lg overflow-hidden border-0"
            style={{
              background: "rgba(20, 20, 50, 0.38)",
              backdropFilter: "blur(28px) saturate(220%)",
              WebkitBackdropFilter: "blur(28px) saturate(220%)",
              border: "1px solid rgba(140, 140, 255, 0.18)",
              boxShadow: "0 20px 70px rgba(0,0,0,0.75)",
            }}
          >
            <div className="p-5">
              <h3
                className="text-center fw-bold mb-4"
                style={{
                  background: "linear-gradient(90deg, #e0e0ff, #ffffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "2rem",
                }}
              >
                Create Account
              </h3>

              {error && (
                <div className="alert alert-danger border-0 rounded-3 mb-4 text-center py-2">
                  {error}
                </div>
              )}

              <div className="mb-4">
                <input
                  type="email"
                  className="form-control form-control-lg rounded-pill text-white bg-transparent border-0 shadow-none px-4"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    background: "rgba(40,40,70,0.6)",
                    border: "1px solid rgba(130,130,255,0.4)",
                    height: "52px",
                  }}
                />
              </div>

              <div className="mb-5 position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control form-control-lg rounded-pill text-white bg-transparent border-0 shadow-none px-4 pe-5"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    background: "rgba(40,40,70,0.6)",
                    border: "1px solid rgba(130,130,255,0.4)",
                    height: "52px",
                  }}
                />
                <button
                  className="btn position-absolute top-50 end-0 translate-middle-y pe-4 bg-transparent border-0"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i
                    className={`fs-5 ${showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} text-white-50`}
                  ></i>
                </button>
              </div>

              <button
                className="btn w-100 rounded-pill py-3 fw-bold"
                onClick={handleRegister}
                disabled={loading}
                style={{
                  background: "linear-gradient(90deg, #7c3aed, #d946ef)",
                  color: "white",
                  fontSize: "1.05rem",
                  boxShadow: "0 10px 30px rgba(124,58,237,0.45)",
                }}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    Creating...
                  </>
                ) : (
                  "Sign Up"
                )}
              </button>

              <div className="text-center mt-4 text-white-50 small">
                Already have an account?{" "}
                <span
                  className="text-white fw-medium"
                  style={{ cursor: "pointer" }}
                  onClick={() => router.push("/login")}
                >
                  Sign in
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}