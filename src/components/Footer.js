import React from 'react';
import Logo from '../assets/Logo.png'
import {Link} from 'react-router-dom';
import '../styles/Footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram, faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {library} from "@fortawesome/fontawesome-svg-core";

library.add(faInstagram, faFacebook, faTwitter, faYoutube);
const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-right">
                    <div className="footer-brand">
                        <img src={Logo}
                            alt="Logo"/>
                        <p>Pakistan's Best Selling Pet Shop</p>
                    </div>
                    <div className="footer-social-icons">
                        <FontAwesomeIcon className='faIcons'
                            icon={faInstagram}
                            style={
                                {
                                    color: "#E4405F",
                                    cursor: 'Pointer'
                                }
                            }/>
                        <FontAwesomeIcon className='faIcons'
                            icon={faFacebook}
                            style={
                                {
                                    color: "#3B5998",
                                    cursor: 'Pointer'
                                }
                            }/>
                        <FontAwesomeIcon className='faIcons'
                            icon={faTwitter}
                            style={
                                {
                                    color: "#1DA1F2",
                                    cursor: 'Pointer'
                                }
                            }/>
                        <FontAwesomeIcon className='faIcons'
                            icon={faYoutube}
                            style={
                                {
                                    color: "#FF0000",
                                    cursor: 'Pointer'
                                }
                            }/>

                    </div>

                </div>
                <div className="footer-left">
                    <div className="footer-column">
                        <ul>
                            <li>
                                <Link to={'/'}>Pet Services</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Pet Services</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Treats Programs</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <ul>
                            <li>
                                <Link to={'/'}>Track your Order</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Acessibility Statement</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <ul>
                            <li>
                                <Link to={'/'}>About</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Careers</Link>
                            </li>
                            <li>
                                <Link to={'/'}>PetCare Charities</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className='copyright'>
             <h4>Copyright © 2023 PetCare LLC</h4>
            </div>
        </footer>
    );
};

export default Footer;
