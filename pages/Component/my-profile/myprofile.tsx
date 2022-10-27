import React from 'react'
import MyImage from '../../../assets/images/preetjpg.jpeg'
import Image, { ImageProps } from 'next/image';
import { useRouter } from 'next/router'


const Myprofile = () => {
    const router = useRouter()

    return (
        <div className="hero">
            <div className="container">
                <div className="left">
                    <h3 className="h2">
                        Hi, I'm <b>Preet&nbsp;Patel</b>.
                    </h3>
                    <div className="btn-group">
                        <a href="#" onClick={()=>{ router.push('contact-us')}} className="btn btn-primary">Contact Me</a>
                        <a href="#" onClick={()=>{ router.push('about-us')}} className="btn btn-secondary">About Me</a>
                    </div>
                </div>
                <div className="right">
                    
                </div>
            </div>
        </div>
    )
}

export default Myprofile