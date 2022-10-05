import React from 'react'
import Image, { ImageProps } from 'next/image';

import Image3 from '../../assets/images/blog-9.png'

const MyBlog = () => {
    return (
        <div className="blog-card">

            <div className="blog-card-banner">
                <Image
                    src={Image3}

                    layout="intrinsic"
                    className="blog-banner-img"
                />
                {/* <img src="./assets/images/blog-9.png" alt="The best web accessibility tools for developers in 2021" */}
                {/* width="250" className="blog-banner-img" /> */}
            </div>

            <div className="blog-content-wrapper">

                <button className="blog-topic text-tiny">Accessibility</button>

                <h3><a href="" className="h3">The best web accessibility tools for developers in 2021</a>
                </h3>

                <p className="blog-text">
                    The quality of the tools you use defines the speed with which you can diagnose and resolve problems.
                    Each year the landscape changes dramatically in web technologies, and of late the tooling for
                    accessibility is no
                    exception.
                </p>

                <div className="wrapper-flex">

                    <div className="profile-wrapper">
                        {/* <img src="./assets/images/author.png" alt="Julia walker" width="50"> */}
                    </div>

                    <div className="wrapper">
                        <a href="#" className="h4">Julia Walker</a>

                        <p className="text-sm">
                            {/* <div dateTime={2021-09-13}>Sep 13, 2021</div> */}
                            <span className="separator"></span>
                            {/* <ion-icon name="time-outline"></ion-icon> */}
                            {/* <div dateTime="PT7M">7 min</div> */}
                        </p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default MyBlog