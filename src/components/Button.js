import React from 'react'

function Button(props) {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <button className={`${props.class1}`} onClick={handleClick}>
    <span className={`${props.class2}`}>{props.title}</span>
</button>
  )
}

export default Button