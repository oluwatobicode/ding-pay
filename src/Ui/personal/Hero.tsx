import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./Hero.css";
import classNames from "classnames";
import axios from "axios";

const Hero: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  const baseURL =
    "https://ding-pay-subscription-proxy-production.up.railway.app"; // optional: rename if updating backend

  const handleSubmit = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axios.post(
        `${baseURL}/api/subscribe`,
        {
          email,
          tags: ["personal"],
        },
        {
          withCredentials: true,
        }
      );

      if (response.status) {
        setStatus(true);
        setEmail("");
      }
    } catch (error) {
      setStatus(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero">
      <div className="hero-section">
        <nav className="nav-section">
          <div className="nav-bar">
            <div className="logo">
              <img src="/assets/Dingpay logo.svg" alt="SonaPay logo" />
              <h1 className="ding-pay-text">SonaPay</h1>

              <div className="nav-links">
                <ul className="nav-items">
                  <li className="nav-link">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "active-link" : ""
                      }
                    >
                      <span>Personal</span>
                    </NavLink>
                  </li>
                  <li className="nav-link">
                    <NavLink
                      to="/Business"
                      className={({ isActive }) =>
                        isActive ? "active-link" : ""
                      }
                    >
                      <span>Business</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="nav-links-two">
              <ul className="nav-items">
                <li className="nav-link">
                  <NavLink
                    to="/demo"
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    <span>Demo</span>
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    <span>Blog</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="hero-intro">
          <div className="heading-text">
            <h1>
              Tap into payments
              <span className="heading-text-span"> powered by sound.</span>
            </h1>
            <p>
              SonaPay lets you pay or get paid with a silent sound from your
              phone. It’s fast, secure, and built for the future no cards, no
              codes, just a signal.
            </p>
            <div className="cta">
              <input
                className="email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              <button
                type="button"
                onClick={handleSubmit}
                className={classNames(
                  "bta-btn",
                  status && "success-api",
                  !status && "failure-api",
                  loading && "processing-api"
                )}
              >
                <p>{`${status ? "Subscribed!" : "Join Waitlist"}`}</p>
              </button>
            </div>
          </div>
          <div className="personal-hero-illustration-box">
            <img
              className="hero-illustration"
              src="/assets/personal-hero-illustartion.png"
              alt="SonaPay illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
