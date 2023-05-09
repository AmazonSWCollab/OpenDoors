import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import OpenDoorsLogo from '../assets/symbols/Logo.png';


const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/OpenDoors/" className="logo">
          <h1>OpenDoors</h1>
          <img src={OpenDoorsLogo} style={{
              width: '50px',
              height: '60px',
              marginRight: '20px'
          }} alt=""></img>
        </Link>
        <Navbar />
      </div>

    </header>
  );
};

export default Header;
