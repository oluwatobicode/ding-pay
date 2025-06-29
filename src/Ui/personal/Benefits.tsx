import "./Benefits.css";

const benefits = [
  {
    icon: "/assets/rocket.svg",
    title: "Faster Than Tap",
    desc: "SonaPay uses encrypted sound waves to complete transactions in seconds. No QR scans, no cards—just sound and speed.",
  },
  {
    icon: "/assets/verify.svg",
    title: "Data Stays Encrypted",
    desc: "Your card and wallet information is never shared or saved. Every transaction is protected by layers of audio encryption.",
  },
  {
    icon: "/assets/lock.svg",
    title: "Built for Privacy",
    desc: "SonaPay ensures that your personal and transaction data remains private. Only you hear the signal—no one else needs to know.",
  },
];

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="benefits-section">
        <h1>
          Experience the future of payments.
          <span className="benefits-section-span">
            {" "}
            It’s safe, seamless and simple.
          </span>
        </h1>

        <div className="benefits-details">
          {benefits.map((el, i) => (
            <div className="benefit-item" key={i}>
              <div className="icon-bg">
                <img src={el.icon} alt={el.title} />
              </div>
              <h2>{el.title}</h2>
              <p>{el.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
