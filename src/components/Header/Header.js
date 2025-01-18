
import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
export default function Header({ onLoginClick }) {
    return (
        <>
            <header id="site-header" className="header">
                <div id="header-wrap">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <nav className="navbar navbar-expand-lg justify-content-lg-between px-4">
                                    <a className="navbar-brand logo" href="#">
                                        <img className="img-fluid" src="/assets/Home/logo.jpg" alt="" />
                                    </a>
                                    <button className="navbar-toggler ht-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <svg width="40px" height="40px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.528"></g><g id="SVGRepo_iconCarrier"> <path d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" fill="#000000"></path> <path d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z" fill="#000000"></path> <path d="M3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H3Z" fill="#000000"></path> </g></svg>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="nav navbar-nav mx-auto">
                                            <li className="nav-item">
                                                <Link className="nav-link active" to={"/"}>Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={"/AboutUs"}>About Us</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={"/Services"}>Our Services</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={"/BBPS"}>BBPS</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={"/OurPartner"}>Our Partners</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={"/WhyUs"}>Why Us?</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={"/ContactUs"}>Contact Us</Link>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                    <div className="header-right d-lg-flex align-items-center login-none">
                                        <Link className="header-btn"  onClick={onLoginClick}>Login <i className="bi bi-arrow-right"></i></Link>
                                    </div>
                                </nav>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

