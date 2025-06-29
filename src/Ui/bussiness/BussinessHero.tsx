import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./BussinessHero.css";
import classNames from "classnames";
import axios from "axios";

const BussinessHero: React.FC = () => {
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
          tags: ["business"],
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
      <div className="bussiness-section">
        <nav className="buss-section">
          <div className="nav-bar">
            <div className="logo">
              <img src="/assets/Dingpay logo.svg" alt="" />
              <h1 className="ding-pay-text">SonaPay</h1>

              <div className="nav-links">
                <ul className="bussiness-items">
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
              <ul className="bussiness-items">
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

        <div className="bussiness-intro">
          <div className="bussiness-text">
            <h1>
              Transform your phone into a <span>Sound-Activated POS</span>
            </h1>
            <p>
              SonaPay Business replaces terminals with your smartphone. Accept
              payments on the spot—no cables, no USSD, no bank transfers. Just
              pure wireless sound.
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
          <div className="bussiness-hero-illustration-box">
            <img
              className="bussiness-illustration"
              src="/assets/bussiness-hero-illustration.svg"
              alt="bussiness-hero-illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BussinessHero;
