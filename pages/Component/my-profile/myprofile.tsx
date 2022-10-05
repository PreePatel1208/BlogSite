import React from 'react'
import MyImage from '../../../assets/images/preetjpg.jpeg'
import Image, { ImageProps } from 'next/image';


const Myprofile = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="left">
                    <h2 className="h1">
                        Hi, I'm <b>Preet&nbsp;Patel</b>.
                        <br />Web Developer
                    </h2>
                    <p className="h3">
                        Specialized in <abbr title="Accessibility">a11y</abbr>
                        and Core Web Vitals
                    </p>

                    <div className="btn-group">
                        <a href="#" className="btn btn-primary">Contact Me</a>
                        <a href="#" className="btn btn-secondary">About Me</a>
                    </div>

                </div>
                <div className="right">
                    <div className="pattern-bg"></div>
                    <div className="img-box">
                        <Image
                            src={MyImage}
                            alt="Devblog's logo"
                            height={230}
                            width={200}
                            layout="intrinsic"
                            className='my_react hero_image'

                        />

                       
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Myprofile