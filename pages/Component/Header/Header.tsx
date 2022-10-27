import React from 'react'
import Image from 'next/image';
import Image2 from '../../../assets/images/logo-dark.svg'
import { useRouter } from 'next/router'


const Header = () => {
    const router = useRouter()
    return (
        <>
            <header>
                <div className="container">
                    <nav className="navbar">
                        <a href="#">
                            <Image
                                src={Image2}
                                alt="Devblog's logo"
                                height={150}
                                width={150}
                                layout="intrinsic"
                                className="logo-dark"
                            />
                        </a>
                        <div className="">
                            <ul className="flex-wrapper">
                                <li>
                                    <a href="#" className="" >Home</a>
                                </li>
                              <li>
                              <a className="" onClick={()=>{ router.push('Component/post/add-post')}}>About Me</a>
                              </li>

                                <li>
                                    <a href="#" onClick={()=>{ router.push('contact-us')}} className="">Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div className="mobile-nav">
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
                    </nav>
                </div>
            </header>
        </>




    )
}

export default Header