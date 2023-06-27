import React from 'react'

function Button(props) {
  return (
    <button className={`${props.class1}`}>
    <span className={`${props.class2}`}>{props.title}</span>
</button>
  )
}

export default Button