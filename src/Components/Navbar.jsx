import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4 pb-2 pt-2 mb-3">
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
                        <Link to="SignUp">
                            <button className='btn btn-primary d-lg-none' >SignUp</button>
                        </Link>
                    </div>

                    <div id="Search" className='collapse navbar-collapse justify-content-end'>
                        <input type="text" placeholder='Search Here' />
                        <button className="btn btn-success mt-0 mb-0 m-2">Search</button>
                    </div>

                </div>

                <Link to="SignUp">
                    <button className='btn btn-primary d-lg-block d-none' >SignUp</button>
                </Link>

            </nav>
        </>

    )
}

export default Navbar

Navbar.defaultProps = {
    NavBrand: "Web Brand"
}