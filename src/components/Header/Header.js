
import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <>
            <header id="site-header" class="header">
                <div id="header-wrap">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col">
                                <nav class="navbar navbar-expand-lg justify-content-lg-between px-4">
                                    <Link class="navbar-brand logo" to="/">
                                        <img class="img-fluid" src="/assets/Home/logo.png" alt="" />
                                    </Link>
                                    <button class="navbar-toggler ht-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <svg width="40px" height="40px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.528"></g><g id="SVGRepo_iconCarrier"> <path d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" fill="#000000"></path> <path d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z" fill="#000000"></path> <path d="M3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H3Z" fill="#000000"></path> </g></svg>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarNav">
                                        <ul class="nav navbar-nav mx-auto">
                                            <li class="nav-item">
                                                <Link class="nav-link active" to={"/"}>Home</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link" to={"/AboutUs"}>About Us</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link" to={"/Services"}>Our Services</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link" to={"/BBPS"}>BBPS</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link" to={"/OurPartner"}>Our Partners</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link" to={"/WhyUs"}>Why Us?</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link" to={"/Contact"}>Contact Us</Link>
                                            </li>
                                            <li class="nav-item xs">
                                                <Link class="nav-link" to={"/Login"}>Login</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="header-right d-lg-flex align-items-center login-none">
                                        <Link class="header-btn" to={"/Login"}>Login <i class="bi bi-arrow-right"></i></Link>
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

