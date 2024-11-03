import React from 'react'
import { Link } from 'react-router-dom'

const CardService = ({src,title,subtitle}) => {
  return (
    <Link to={'/contactpage'}>
    <button>
    <div className="card card-compact bg-themeColor hover:opacity-85 text-white w-[300px] h-full shadow-xl font-playfair italic">
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
    </button>
    </Link>

  )
}

export default CardService
