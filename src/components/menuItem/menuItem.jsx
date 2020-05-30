import React from 'react'
import './menuItem.scss'

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menuItem`}>
      <div className='backgroundImage' style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem;
