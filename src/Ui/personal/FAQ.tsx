import React, { useState } from "react";
import "./FAQ.css";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

const faqItems = [
  {
    title: "Is SonaPay safe to use?",
    desc: "Absolutely. SonaPay's proprietary sound-based system uses encrypted audio pulses that are unique to each transaction and unreadable to anyone else. It’s more secure than a tap or swipe.",
  },
  {
    title: "What banks and cards work with SonaPay?",
    desc: "SonaPay supports most major cards and banks. We’re adding new partners regularly to ensure a seamless experience for both customers and businesses.",
  },
  {
    title: "Do I have to pay extra to use it?",
    desc: "No hidden charges. Transactions through SonaPay are free for everyday users. Merchants enjoy low processing fees with no surprises.",
  },
  {
    title: "Can I use it outside my country?",
    desc: "Currently, SonaPay is rolling out across select countries. Cross-border support is in the works—so keep an ear out.",
  },
];

const FAQ: React.FC = () => {
  // Set initial state to 0 to open the first FAQ by default
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-section">
        <div className="faq-box">
          <h1 className="faq-box-title">QUESTIONS? WE’VE GOT ANSWERS</h1>

          <div className="faq-section-box">
            {faqItems.map((el, i) => (
              <div className="questions-section" key={i}>
                <div className="question-each">
                  <div className="questions-align">
                    <h4>{el.title}</h4>
                    <button
                      onClick={() => toggleAccordion(i)}
                      className={`question-icon`}
                    >
                      {activeIndex === i ? <FiMinus /> : <FaPlus />}
                    </button>
                  </div>
                  <div
                    className={`answer ${activeIndex === i ? "active" : ""}`}
                    style={{
                      maxHeight: activeIndex === i ? "1000px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.6s ease",
                      padding: activeIndex === i ? "1rem" : "0 1rem",
                    }}
                  >
                    <p>{el.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="faq-image">
          <div className="faq-content">
            <h1>COMING SOON</h1>
            <div className="faq-content-into">
              <div className="app-play-store">
                <button className="cta-link">
                  <img
                    className="cta-icon"
                    src="/assets/app store.svg"
                    alt=""
                  />
                </button>
                <button className="cta-link">
                  <img
                    className="cta-icon"
                    src="/assets/play-store.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <img
              src="/assets/coming-soon-phone.svg"
              alt="coming-soon-phone"
              className="coming-soon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
