import {Link} from 'react-router-dom'
function ShopBy(props) {
  return (
    <div className='imgs'>
    {props.pets.map((pet, index) => (
      <div className='list' key={index}>
        <div className='img-list'>
        <img src={pet.img} alt={pet.title}/>
        </div>
        <h4><Link to={'/'}>{pet.title}</Link></h4>
      </div>
    ))}
  </div>
  )
}

export default ShopBy