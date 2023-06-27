import React from 'react'
import Button from './Button'
function Banners(props) {
  return (
    <div className={props.class1}>
    <div className={props.class2}>
      <h2>{props.title}</h2>
      <h3>{props.content}</h3>
      <Button class1='button' class2='button-content' title='Shop Now'/>
    </div>
  </div>

  )
}

export default Banners