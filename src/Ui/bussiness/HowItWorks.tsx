import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div
        className="how-it-works-section
      "
      >
        <h2 className="section-title">HOW IT WORKS</h2>
        <div className="steps-container">
          <div className="line"></div>

          <div className="step">
            <div className="circle">1</div>
            <p>Download the SonaPay Business app to get started.</p>
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
            <p>Verify your identity by completing our merchant onboarding.</p>
            <div className="step-image">
              <img
                src="/assets/bussinesssteptwo.svg"
                alt="Step 2"
                className="step-img"
              />
            </div>
          </div>

          <div className="step">
            <div className="circle">3</div>
            <p>
              Start receiving payments instantly using your phone’s built-in
              speaker.
            </p>
            <div className="step-image">
              <img
                src="/assets/bussinessstepthree.svg"
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
