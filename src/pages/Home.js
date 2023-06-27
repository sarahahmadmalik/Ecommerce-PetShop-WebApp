
import NavBar from './../components/NavBar';
import petImage from '../assets/illustration1.png'
import '../styles/Home-banner.css'
import '../styles/Home.css'
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faHeart, faBagShopping, faCreditCard, faTags} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import CatImg from '../assets/cat.jpg'
import dogImg from '../assets/Dog.jpg'
import fishImg from '../assets/Fish.jpg'
import birdImg from '../assets/Bird.jpg'
import ShopBy from '../components/ShopBy';
import Banners from '../components/Banners';
import bannerImg from '../assets/illsutration2.png'
import Footer from '../components/Footer';
import Card from '../components/Card';
import groomingImg from '../assets/grooming.jpg'
import shotsImg from '../assets/vaccination.jpg'
import trainImg from '../assets/training.jpg'
library.add(faTruckFast, faHeart, faBagShopping, faCreditCard, faTags);

function Home() {
  const pets = [
    { title: 'Cats', img: `${CatImg}` },
    { title: 'Dogs', img: `${dogImg}` },
    {title: 'Birds', img: `${birdImg}`},
    {title: 'Fish', img: `${fishImg}`}
  ];
  

  return (
    <>
    <div className='main'>
    <NavBar/>
    <div className='home-banner'>
    <SearchBar/>
  <div className='banner-content'>
      <div className='banner-heading'>
        <div className='banner-title-1'>
        <h1>High Quality Produts for your Pets</h1>
        </div>
        <div className='banner-btn'>
          <Button class1='button' class2='button-content' title='Browse Products' />
        </div>
      </div>
      <div className='banner-image'>
        <img src={`${petImage}`} alt= 'Illustration of pet'/>
      </div>
    </div>
    </div>
    </div>
    <div className='trusted-banner'>
    <ul>
    
    <div>
    <FontAwesomeIcon className='icons' icon={faTruckFast} />
    <li>Free Shipping</li>
    </div>

    <div>
    <FontAwesomeIcon className='icons' icon={faHeart} />
    <li>99% Positive Feedbacks</li>
    </div>
    <div>
    <FontAwesomeIcon className='icons' icon={faBagShopping} />
    <li>Easy Purchase</li>
    </div>
    <div>
    <FontAwesomeIcon className='icons' icon={faCreditCard} />
    <li>Debit Card Purchase</li>
    </div>
    <div>
    <FontAwesomeIcon className='icons' icon={faTags} />
    <li>Wide Variety</li>
    </div>
    </ul>
  </div>

  <Banners class1='sales-banner' class2='banner-title' title='Save $10 when you spend $50' content='on Free Same-Day Delivery orders through 7/4'/>

  <div className='shopBy'>
    <div className='shopBy-title'>
      <h2>Shop by Pet</h2>
    </div>
    <ShopBy pets={pets}/>
  </div>

  <Banners class1='sales-banner2' class2='banner-title-2' title='Protect your pets with affordable medications' content='Fleas and Tick Protection'/>
  <div className='hygeine-banner'>
    <div className='banner-illustration'>
      <img src={`${bannerImg}`}/>
    </div>
    <div className='banner-data'>
      <h2>Care and Hygiene of Cats and Dogs</h2>
      <h4>Proper care is the basis of your four-legged friend to feel completely comfortable. In addition to a healthy and beautiful coat, and caring for paws
        and claws as well as ear and eyes are important aspects.
      </h4>
      <Button class1='button blue' class2='button-content' title='Shop Now'/>
    </div>
  </div>

  <div className='Services-portion'>
    <div className='portion-label'>
      <h3>Pet Services</h3>
    </div>
    <div className='cards'>
    <Card image={groomingImg} title="Grooming" />
    <Card image={shotsImg} title="Vacinations" />
    <Card image={trainImg} title="Pet Trainings" />
    </div>
  </div>
  <Footer/>
  
  </>
  )
}

export default Home