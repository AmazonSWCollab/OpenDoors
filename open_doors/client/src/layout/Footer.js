import '../App.css';

const Footer = () => {
  return (

    <footer>

      <div style={{ position: 'relative', minHeight: '80vh' }}>
        <div className="footer">
          <div style={{ paddingLeft: '100px' }}>
            <h3 style={{ textIndent: '60px', cursor: 'pointer' }}>About Us</h3>
            <ul style={{ listStyleType: 'none', textAlign: 'center', cursor: 'pointer' }}>
              <li>Vision Statement</li>
              <li>Privacy Policy</li>
              <li>Frequently Asked Questions</li>
            </ul>
          </div>

          <div style={{ textAlign: 'center', paddingRight: '100px' }}>
            <h3 style={{ textIndent: '5px', cursor: 'pointer' }}>Accessibility</h3>
            <ul style={{ listStyleType: 'none', textAlign: 'center', cursor: 'pointer' }}>
              <li>Color-Blind Mode</li>
              <li>Big Font Mode</li>
              <li>Donate</li>
            </ul>
          </div>

          <div style={{ textAlign: 'center', paddingRight: '150px' }}>
            <h3 style={{cursor: 'pointer' }}>Contact Us</h3>
            <ul style={{ listStyleType: 'none', textAlign: 'center', cursor: 'pointer' }}>
              <li>Email Us</li>
              <li>Our LinkedIn</li>
              <li>Our Discord</li>
            </ul>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
