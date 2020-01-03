import React from 'react'
import "./misc.css"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>WriteInspyre</h1>
      </div>
      <Link className="dash-link" to='/dash'>
        user profile
      </Link>
    </div>
  )
}

export default Header
