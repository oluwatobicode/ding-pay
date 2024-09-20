import { NavLink } from "react-router-dom";
import React from "react";
import "./BussinessHero.css";

const BussinessHero: React.FC = () => {
  return (
    <div className="hero">
      <div className="bussiness-section">
        <nav className="buss-section">
          <div className="nav-bar">
            <div className="logo">
              <img src="/assets/Dingpay logo.svg" alt="" />
              <h1 className="ding-pay-text">DingPay</h1>

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
              Turn your mobile phone to <span>A POS SYSTEM</span>
            </h1>
            <p>
              We’ve simplified your business payments, now you can receive them
              conveniently on your phone without the aid of a hardware terminal,
              USSD or bank transfers.
            </p>
            <div className="cta">
              <input
                className="email-input"
                type="email"
                placeholder="Email Address"
                name=""
                id=""
              />
              <button className="bta-btn">
                <p>Join the waitlist</p>
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
