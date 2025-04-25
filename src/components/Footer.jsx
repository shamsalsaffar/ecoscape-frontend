import "../styles/footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="item one">
          <h1>ECOSCAPE</h1>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h4>
        </div>
        <div className="item two">
          <h3>COMPANY</h3>
          <h4>About Us</h4>
          <h4>Legal Information</h4>
          <h4>Contact Us</h4>
        </div>
        <div className="item three">
          <h3>HELP CENTER</h3>
          <h4>What Is Ecoutourism?</h4>
          <h4>What Is Our Concept?</h4>
          <h4>Why Us?</h4>
          <h4>FAQs</h4>
          <h4>Rental Guides</h4>
        </div>
        <div className="item four">
          <h3>CONTACT INFO</h3>
          <h4>Email: ecoscape@gmail.com</h4>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {year} All rights reserved</p>
        <p>
          Created with by Alexander Angove Lilja, Iasmina Alkashash & Shams
          Alsaffar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
