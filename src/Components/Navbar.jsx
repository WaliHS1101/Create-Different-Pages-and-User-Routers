import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container">
                    <Link to="/" className='nav-link'>
                        <span className="navbar-brand">{props.NavBrand}</span>
                    </Link>

                    <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#Search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Nav-Bar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div id="Nav-Bar" className=' justify-content-end collapse navbar-collapse'>
                        <ul className="navbar-nav">
                            {props.NavLink.map((elements) => {
                                return (
                                    <li className="nav-item">
                                        <Link to={elements.NavRoute} className="nav-link">{elements.Link}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div id="Search" className='collapse navbar-collapse justify-content-end'>
                        <input type="text" placeholder='Search Here' />
                        <button className="btn btn-success mt-0 mb-0 m-2">Search</button>
                    </div>

                </div>

            </nav>
        </>

    )
}

export default Navbar

Navbar.defaultProps = {
    NavBrand: "Web Brand"
}