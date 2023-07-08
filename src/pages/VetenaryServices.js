import NavBar from '../components/NavBar'
import Services from '../components/Services'
import '../styles/vetenaryService.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faStethoscope, faPaw, faHeart, faMedkit} from "@fortawesome/free-solid-svg-icons";
import Footer from '../components/Footer';

library.add(faStethoscope, faPaw, faHeart, faMedkit);

function VetenaryServices() {
 
    return (
        <>
            <div className="main">
                <NavBar/>
            </div>
            <div className='bgBanner'>
            <section id='vet'>
                <div className="vet-banner">
                    <div className="vet-banner-title">
                        <h2>Professional Care for your Pet!</h2>
                        <h3>All animals deserve compassionate vetenary care. Call Now!</h3>
                    </div>
                    <div className="vet-info">
                        <div className="vet-info-item">
                            <FontAwesomeIcon icon="fa-solid fa-stethoscope"/>
                            <p>Best Vet Services for your pets</p>
                        </div>
                        <div className="vet-info-item">
                            <FontAwesomeIcon icon="fa-solid fa-heart"/>
                            <p>Caring and Compassionate Staff</p>
                        </div>
                        <div className="vet-info-item">
                            <FontAwesomeIcon icon="fa-solid fa-medkit"/>
                            <p>Advanced Medical Treatments</p>
                        </div>
                        <div className="vet-info-item">
                            <FontAwesomeIcon icon="fa-solid fa-paw"/>
                            <p>Specialized Care for All Pets</p>
                        </div>
                    </div>

                </div>
            </section>
           
            <div className='services-banner'>
            </div>
            <Services/>
            </div>
            <Footer/>
        </>
    )
}

export default VetenaryServices
