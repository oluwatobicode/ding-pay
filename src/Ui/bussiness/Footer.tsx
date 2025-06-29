import "./Footer.css";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-logo">
          <img src="/assets/Dingpay logo.svg" alt="dingpay logo" />
          <h1 className="footer-logo-text">SonaPay</h1>
        </div>

        <div className="footer-cta">
          <p>Copyright © SonaPay {year}.</p>
          <button className="footer-cta-btn">
            <a href="mailto:" className="footer-cta-link">
              Contact us
            </a>
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
