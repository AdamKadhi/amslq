import React from 'react'

const Card = ({el,showalert}) => {
    let a=5
    
  return (
    <div className='Card'>
      <img src={el.image} alt="" />
       <h1>{el.name}</h1>
       <h2>{el.nationality}</h2>
       <button onClick={()=>showalert(el.name)}>Click</button>
    </div>
  )
}

export default Card
