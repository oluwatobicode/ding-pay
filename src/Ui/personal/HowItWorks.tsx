import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="how-it-works-section">
        <h2 className="section-title">HOW IT WORKS</h2>
        <div className="steps-container">
          <div className="line"></div>

          <div className="step">
            <div className="circle">1</div>
            <p>Download the SonaPay app on your mobile device.</p>
            <div className="step-image">
              <img
                src="/assets/stepone.svg"
                alt="Step 1"
                className="step-img"
              />
            </div>
          </div>

          <div className="step">
            <div className="circle">2</div>
            <p>Link your preferred card or crypto wallet securely.</p>
            <div className="step-image">
              <img
                src="/assets/steptwo.svg"
                alt="Step 2"
                className="step-img"
              />
            </div>
          </div>

          <div className="step">
            <div className="circle">3</div>
            <p>
              At checkout, use sound to send payments instantly no cards needed.
            </p>
            <div className="step-image">
              <img
                src="/assets/stepthree.svg"
                alt="Step 3"
                className="step-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
