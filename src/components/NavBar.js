import {useState, useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping, faChevronDown, faUser} from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from 'react-router-dom';
import Hamburger from '../assets/Hamburger.png';
import Logo from '../assets/Logo.png';
import '../styles/NavBar.css';
import {library} from "@fortawesome/fontawesome-svg-core";
import {CartContext} from '../components/CartContext';
library.add(faCartShopping, faChevronDown, faUser);

function NavBar() {
    const [isOpen, setOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isShopHovered, setShopHovered] = useState(false);
    const {cartItems, cartCount, setCartCount, cartTotal} = useContext(CartContext);
    const navigate = useNavigate();

    const handleMenu = () => {
        setOpen(prevState => !prevState);
    }
    const handleDropDown = () => {
        setDropdownOpen(!isDropdownOpen);
    }
    const showConsole = () => {
        console.log(Object.entries(cartItems).length)
    }
    const handleShopHover = () => {
        setShopHovered(prevState => !prevState);
    }


    const updateCartCount = (count) => {
        setCartCount(count);
    };

    console.log(cartItems)

    const handlePage = () => {
        navigate('/Login');
    };

    return (
        <nav className='fill'>
            <div className='container'>
                <div className='logo'>
                    <img src={Logo}
                        alt='Logo'/>
                </div>
                <div className={
                        `${
                            isOpen ? 'menu-icon open' : 'menu-icon'
                        }`
                    }
                    onClick={handleMenu}>
                    <div className='buttons responsive'>
                        <button id='cart-button' className='responsive-btn'
                            onMouseEnter={handleShopHover}
                            onMouseLeave={handleShopHover}
                            onClick={showConsole}>
                            <FontAwesomeIcon icon={faCartShopping}/> {
                            cartCount > 0 && <span className="cart-count">
                                {cartCount}</span>
                        }
                        </button>
                        <button id='user-button responsive'>
                            <FontAwesomeIcon icon={faUser}/>
                        </button>
                    </div>
                    <img src={Hamburger}
                        alt='button-icon'/>
                </div>
            </div>
            <div className='nav-menu'>
                <ul className={
                    `nav-elements ${
                        isOpen ? 'open' : 'nav-elements'
                    }`
                }>
                    <li className='nav-item'>
                        <Link id='menu'
                            to={'/'}>Home</Link>
                    </li>
                    <li className={
                            `nav-item ${
                                isShopHovered ? 'hovered' : ''
                            }`
                        }
                        onMouseEnter={handleDropDown}
                        onMouseLeave={handleDropDown}>
                        <Link id='menu'
                            to={'/Shop'}>Shop</Link>
                        <FontAwesomeIcon icon={faChevronDown}
                            className="arrow-icon"/> {
                        isDropdownOpen && (
                            <div className="dropdown">
                                <ul>
                                    <li>
                                        <Link to={'/Shop/Cats'}>Cats</Link>
                                    </li>
                                    <li>
                                        <Link to={'/Shop/Dogs'}>Dogs</Link>
                                    </li>
                                    <li>
                                        <Link to={'/Shop/Birds'}>Birds</Link>
                                    </li>
                                    <li>
                                        <Link to={'/Shop/Fish'}>Fish</Link>
                                    </li>
                                </ul>
                            </div>
                        )
                    } </li>
                    <li className='nav-item'>
                        <Link id='menu'
                            to={'/VetenaryServices'}>Vetenary Services</Link>
                    </li>
                    <li className='nav-item'>
                        <Link id='menu'
                            to={'/Pharmacy'}>Pharmacy</Link>
                    </li>
                </ul>
            </div>
            <div className='buttons'>
                <button id='cart-button'
                    onMouseEnter={handleShopHover}
                    onMouseLeave={handleShopHover}>
                    <FontAwesomeIcon className='cart-icon'
                        icon={faCartShopping}/> {
                    cartCount > 0 && <span className="cart-count">
                        {cartCount}</span>
                }
                    {
                    isShopHovered &&
                        <div className="dropdown-cart">
                        <ul>
                            {cartItems.length > 0 && (
                                cartItems.map((item, index) => {
                                    const { product, quantity } = item;
                                    return (
                                        <>
                                        <li key={index}>
                                            <div className='cart-drop-down'>
                                                <div className='cart-drop-down-img'>
                                                    <img src={`${product.image}`}/>
                                                </div>
                                                <div className='cart-data'>
                                                    <h3>{product.title}</h3>
                                                    <p>Quantity: {quantity}</p>
                                                </div>
                                                <div className='price'>
                                                    <div className='cart-price'>
                                                        <p>${product.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                          <div>
                                          <div className='total'>
                                              <p>Items Price: ${cartTotal}</p>
                                              <p>Shipping Cost: $11.21</p>
                                              <p>Total: ${cartTotal}</p>
                                          </div>
                                      </div>
                                     </>
                                    );
                                })
                            )}
                            { cartItems.length === 0 && (
                                <div className='empty-cart'><p>No items in cart</p></div>
                            )    
                            }
                            
                        </ul>
                    </div>
                    
                } </button>
                <button id='user-button'
                    onClick={handlePage}>
                    <FontAwesomeIcon icon={faUser}/>
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
