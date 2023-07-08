import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom';
function Banners(props) {
  const navigate = useNavigate();

  const handlePage = () => {
   
    navigate(`${props.navigate}`);
    console.log(props.navigate)
  };

  return (
    <div className={props.class1}>
    <div className={props.class2}>
      <h2>{props.title}</h2>
      <h3>{props.content}</h3>
      <Button class1='button' class2='button-content' title={props.btnTitle} onclick={handlePage}/>
    </div>
  </div>

  )
}

export default Banners