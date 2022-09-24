import React from 'react'
import Image, { ImageProps } from 'next/image';
import Image1 from '../../../assets/images/logo-light.svg'
import Image2 from '../../../assets/images/logo-dark.svg'

const Header = () => {
    return (

        <div className="container">

            <nav className="navbar">

                <a href="#">

                    <Image
                        src={Image1}
                        alt="Logo"
                        height={150}
                        width={150}
                        layout="intrinsic"
                        className="logo-light"
                    />
                    {/* <Image
                        src={Image1}
                        alt="Logo"
                        height={150}
                        width={150}
                        layout="intrinsic"
                        className="logo-dark"

                    /> */}
                </a>

                


                <div className="flex-wrapper">

                    <ul className="desktop-nav">

                        <li>
                            <a href="#" className="nav-link">Home</a>
                        </li>

                        <li>
                            <a href="#" className="nav-link">About Me</a>
                        </li>

                        <li>
                            <a href="#" className="nav-link">Contact</a>
                        </li>

                    </ul>

               

                </div>

                <div className="mobile-nav">

                    <button className="nav-close-btn">

                    </button>

                    <div className="wrapper">

                        <p className="h3 nav-title">Main Menu</p>

                        <ul>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Home</a>
                            </li>

                            <li className="nav-item">
                                <a href="#" className="nav-link">About Me</a>
                            </li>

                            <li className="nav-item">
                                <a href="#" className="nav-link">Contact</a>
                            </li>
                        </ul>

                    </div>

                    <div>

                        <p className="h3 nav-title">Topics</p>

                        <ul>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Database</a>
                            </li>

                            <li className="nav-item">
                                <a href="#" className="nav-link">Accessibility</a>
                            </li>

                            <li className="nav-item">
                                <a href="#" className="nav-link">Web Performance</a>
                            </li>
                        </ul>

                    </div>

                </div>

            </nav >

        </div >



    )
}

export default Header