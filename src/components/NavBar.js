import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faChevronDown, faUser } from "@fortawesome/free-solid-svg-icons"; // Import the necessary font awesome icons
import { Link } from 'react-router-dom';
import Hamburger from '../assets/Hamburger.png';
import Logo from '../assets/Logo.png';
import '../styles/NavBar.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { CartContext } from '../components/CartContext';
library.add(faCartShopping, faChevronDown, faUser); // Add the font awesome icons to the library

function NavBar() {
  const [isOpen, setOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isShopHovered, setShopHovered] = useState(false);
  const { cartCount, setCartCount } = useContext(CartContext);

  const handleMenu = () => {
    setOpen(prevState => !prevState);
  }

  const handleShopHover = () => {
    setDropdownOpen(true);
    setShopHovered(true); // Set the hover state to true
  }

  const handleShopLeave = () => {
    setDropdownOpen(false);
    setShopHovered(false); // Set the hover state to false
  }

  const updateCartCount = (count) => {
    setCartCount(count);

  };

  return (
    <nav className='fill'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt='Logo' />
        </div>
        <div className={`${isOpen ? 'menu-icon open' : 'menu-icon'}`} onClick={handleMenu}>
        <div className='buttons responsive'>
        <button id='cart-button' className='responsive-btn'>
          <FontAwesomeIcon icon={faCartShopping} />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>
        <button id='user-button responsive'>
        <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
          <img src={Hamburger} alt='button-icon' />
        
        </div>
      </div>
      <div className='nav-menu'>
        <ul className={`nav-elements ${isOpen ? 'open' : 'nav-elements'}`}>
        <li className='nav-item'><Link id='menu' to={'/'}>Home</Link></li>
          <li className={`nav-item ${isShopHovered ? 'hovered' : ''}`} onMouseEnter={handleShopHover} onMouseLeave={handleShopLeave}>
            <Link id='menu' to={'/Shop'}>Shop</Link>
            <FontAwesomeIcon icon={faChevronDown} className="arrow-icon" />
            {isDropdownOpen && (
              <div className="dropdown">
                <ul>
                  <li><Link to={'/Shop/Cats'}>Cats</Link></li>
                  <li><Link to={'/Shop/Dogs'}>Dogs</Link></li>
                  <li><Link to={'/Shop/Birds'}>Birds</Link></li>
                  <li><Link to={'/Shop/Fish'}>Fish</Link></li>
                </ul>
              </div>
            )}
          </li>
          <li className='nav-item'><Link id='menu' to={'/Vetenary Services'}>Vetenary Services</Link></li>
          <li className='nav-item'><Link id='menu' to={'/Pharmacy'}>Pharmacy</Link></li>
        </ul>
      </div>
      <div className='buttons'>
        <button id='cart-button'>
          <FontAwesomeIcon className='cart-icon' icon={faCartShopping} />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>
        <button id='user-button'>
        <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
