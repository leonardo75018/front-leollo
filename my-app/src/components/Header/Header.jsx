import React from 'react'
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div id="header-container">
            <Link to="/home"> <h2>Leollo</h2>  </Link>
        </div>
    )
}

export default Header
