import React from "react";
import "./Features.css";

const Features: React.FC = () => {
  return (
    <section className="features">
      <div className="features-section">
        <div className="card-left">
          <div className="card-image-left">
            <img
              className="feature-img"
              src="/assets/featureOne.png"
              alt="features-one-image"
            />
          </div>
          <div className="card-text-left">
            <h1>
              MAKE LARGE AND
              <span className="card-text-left-block"> SMALL PAYMENTS</span>
            </h1>
            <p>
              Dingpay is here to process your payments as much as your
              transaction limit permits.
            </p>
          </div>
        </div>

        <div className="card-right">
          <div className="card-text-right">
            <h1>Don’t worry about misplaced cards</h1>
            <p>
              Forget about losing or misplacing cards. With Dingpay, you can
              securely pay without needing physical cards.
            </p>
          </div>

          <div className="card-image-right">
            <img
              className="feature-img-s"
              src="/assets/featureTwo.png"
              alt="features-two-image"
            />
          </div>
        </div>

        <div className="card-left">
          <div className="card-image-left">
            <img
              className="feature-img"
              src="/assets/featureThree.png"
              alt="features-three-image"
            />
          </div>
          <div className="card-text-left">
            <h1>Skip lengthy payment routines</h1>
            <p>
              Simplify your transactions: With Dingpay, your payments at
              checkout are just one sound away.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
