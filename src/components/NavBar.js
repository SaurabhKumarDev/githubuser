import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavImg from '../Picture/nav.jpg'

function NavBar() {
    const location = useLocation();
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>
                        <img src={NavImg} alt='Navbar icon' className='mx-2' style={{ height: "2rem", borderRadius: "50%" }} />
                        GitHub
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/randomuser' ? 'active' : ""}`} to='/randomuser'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/search' ? 'active' : ""}`} to='/search'>Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/user' ? 'active' : ""}`} to='/search'>User</Link>
                            </li>
                        </ul>
                        {localStorage.getItem('NavbarRightText') ? <span className="navbar-text btn btn-primary disabled">
                            {localStorage.getItem('NavbarRightText')}
                        </span>
                            :
                            ""
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar