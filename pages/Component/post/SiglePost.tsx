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
        <div className="header">
          <h2>Blog Name</h2>
        </div>

        <div className="row">
          <div className="leftcolumn">
            <div className="card">
              <div className="grid-item">
                <div className="blog-card">
                  <div className="blog-card-banner">
                    <Image
                      src={Image3}
                      layout="intrinsic"
                      className="blog-banner-img"
                    />
                  </div>
                  <div className="blog-content-wrapper">
                    <button className="blog-topic text-tiny">Accessibility</button>
                    <h3><a href={posts.slug} className="h3">{posts.title}</a>
                    </h3>
                    <div className="blog-text">
                      <ReadMore children={posts.body} />
                    </div>
                    <small>{new Date(posts.created).toLocaleDateString()}</small>
                    <br />

                  </div>
                </div>
              </div>

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