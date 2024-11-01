import React from 'react'

const CardService = ({src,title,subtitle}) => {
  return (
<div className="card card-compact bg-themeColor text-white w-[300px] shadow-xl font-playfair italic">
  <figure>
    <img
      alt="servcie"
      className='w-full'
      src={src} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{subtitle}</p>

  </div>
</div>
  )
}

export default CardService
