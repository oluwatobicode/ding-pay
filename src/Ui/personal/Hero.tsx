import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./Hero.css";
import classNames from "classnames";
import axios from "axios";

const Hero: React.FC = () => {
  const [email, setEmai] = useState("");
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  const baseURL =
    "https://ding-pay-subscription-proxy-production.up.railway.app";

  const handleSubmit = async () => {
    if (loading) {
      return;
    }
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
        setEmai("");
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
              <img src="/assets/Dingpay logo.svg" alt="" />
              <h1 className="ding-pay-text">DingPay</h1>

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
              Seamless payments with
              <span className="heading-text-span">a sound unique to you.</span>
            </h1>
            <p>
              Experience the future of payments with unique and untraceable
              sound from your mobile phone. It’s safe, seamless and simple.
            </p>
            <div className="cta">
              <input
                className="email-input"
                type="email"
                value={email}
                onChange={(e) => setEmai(e.target.value)}
                placeholder="Email Address"
                name=""
                id=""
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
              alt="hero-illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
