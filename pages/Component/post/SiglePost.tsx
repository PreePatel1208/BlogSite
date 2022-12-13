import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Image3 from './../../../assets/images/blog-10.png'
import Image from 'next/image'
import ReadMore from '../Readmore/ReadMore'

const SiglePost = ({ posts }: any) => {
  return (
    <>
      <div className="dark-theme">
        <Header />


        <div className="row">
          <div className="leftcolumn">
            <div className="card">
              <h2>{posts.title}</h2>
              <h5>{new Date(posts.created).toLocaleDateString()}</h5>
              <div className="fakeimg" style={{ height: "400px" }}>

                <Image
                  src={Image3}
                  layout="intrinsic"
                  className="blog-banner-img"
                  height= "350px"
                />
              </div>
              <p>Some text..</p>
              <div>{posts.body}</div>
            </div>
          </div>
          <div className="rightcolumn">
            <div className="card">
              <h2>About Me</h2>
              <div className="fakeimg" style={{ height: "200px" }}>Image</div>
              <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            </div>
            <div className="card">
              <h3>Popular Post</h3>
              <div className="fakeimg">Image</div>
              <div className="fakeimg">Image</div>
              <div className="fakeimg">Image</div>
            </div>
          </div>
          <div className="card">
            <h3>Follow Me</h3>
            <p>Some text..</p>
          </div>
        </div>


        <Footer />
      </div>

    </>
  )
}

export default SiglePost