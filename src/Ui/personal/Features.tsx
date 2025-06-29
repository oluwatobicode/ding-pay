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
              alt="send-payments-any-amount"
            />
          </div>
          <div className="card-text-left">
            <div className="card-text-left-details">
              <h1>Pay Any Amount, Anytime</h1>
              <p>
                Whether you're buying snacks or settling bills, SonaPay lets you
                send and receive payments instantly—no matter the size.
              </p>
            </div>
          </div>
        </div>

        <div className="card-right">
          <div className="card-text-right">
            <div className="card-text-right-details">
              <h1>No Cards? No Problem.</h1>
              <p>
                With SonaPay, there’s no need to carry cards. Just use your
                phone’s secure sound technology to complete your payment.
              </p>
            </div>
          </div>

          <div className="card-image-right">
            <img
              className="feature-img-s"
              src="/assets/featureTwo.png"
              alt="contactless-payment"
            />
          </div>
        </div>

        <div className="card-left">
          <div className="card-image-left">
            <img
              className="feature-img"
              src="/assets/featureThree.png"
              alt="instant-checkout"
            />
          </div>
          <div className="card-text-left">
            <div className="card-text-left-details">
              <h1>One Sound. One Checkout.</h1>
              <p>
                Say goodbye to queues and PIN delays. SonaPay completes your
                transactions with a single, silent sound signal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
