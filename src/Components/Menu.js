import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Menu = () => {
    const navigate = useNavigate();

  return (
    <div className='menu'>
        <button className='menu__btn' onClick={() => {navigate('/dashboard')}}>
            {/* <Link to='/dashboard'></Link> */}
        </button>
    </div>
  )
}

export default Menu