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
              src="/assets/bussinessOne.png"
              alt="bussiness-one-image"
            />
          </div>
          <div className="card-text-left-business">
            <div className="card-text-left-details-bussiness">
              <h1>Handle any payment volume</h1>
              <p>
                Whether you're processing ₦5,000 or ₦5 million, SonaPay Business
                scales with you effortlessly and reliably.
              </p>
            </div>
          </div>
        </div>

        <div className="card-right">
          <div className="card-text-right">
            <div className="card-text-right-details-bussiness">
              <h1>Delight your customers</h1>
              <p>
                Provide faster, frictionless payments. Customers only need their
                mobile phone to complete a purchase.
              </p>
            </div>
          </div>

          <div className="card-image-right">
            <img
              className="feature-img-s"
              src="/assets/busssinessTwo.png"
              alt="features-two-image"
            />
          </div>
        </div>

        <div className="card-left">
          <div className="card-image-left">
            <img
              className="feature-img"
              src="/assets/bussinessThree.png"
              alt="features-three-image"
            />
          </div>
          <div className="card-text-left-business">
            <div className="card-text-left-details-bussiness">
              <h1> No more terminals</h1>
              <p>
                Eliminate bulky hardware and setup fees. Your phone becomes your
                all-in-one point-of-sale.
              </p>
            </div>
          </div>
        </div>

        <div className="card-right">
          <div className="card-text-right">
            <div className="card-text-right-details-bussiness">
              <h1>Built-in business insights</h1>
              <p>
                Get real-time visibility on transactions, revenue trends, and
                customer activity—right from your dashboard.
              </p>
            </div>
          </div>

          <div className="card-image-right">
            <img
              className="feature-img-s"
              src="/assets/bussinessFour.png"
              alt="bussiness-four-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
