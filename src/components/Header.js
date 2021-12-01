import React from 'react';
import { Link } from "react-router-dom";



const Header = () => {
  return (
    <div className="header">
      <Link to="/" >Главная Страница</Link>
      <Link to="/catalog" >Каталог</Link>
    </div>
  )
}

export default Header
