import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Image3 from './../../../assets/images/blog-10.png'
import Image from 'next/image'
import ReadMore from '../Readmore/ReadMore'
import moment from 'moment';
import axios from 'axios'
import { useRouter } from 'next/router'

const SiglePost = ({ post,posts }: any) => {

  // const dt = moment(posts.created, "MM/DD/YYYY");
  console.log("postsss",posts);
  const router=useRouter()
     
const handleTitleClick=(route:any)=>{
  router.push(`/${route}`)
}

  return (
    <>
      <div className="dark-theme">
        <Header />
        <div className="row">
          <div className="leftcolumn">
            <div className="card">
              <p></p>
              <div>{moment(post.created).format('MMMM Do YYYY')}</div>
              <div className="fakeimg" style={{ height: "400px" }}>

                <img
                  src={`http://localhost:2500/${post.image?.filename}`}
                  width="300px"
                  className="blog-banner-img"
                />
              </div>
              <p className='title'><strong>{post.title}</strong></p>
              <div className='body' dangerouslySetInnerHTML={{ __html: post.body }} />
            </div>
          </div>
          <div className="rightcolumn">
            <div className="card">
              <h2>About Me</h2>
              <div className="fakeimg" style={{ height: "200px" }}>Hey Preet is here</div>

            </div>
            <div className="card">

              <h3>Popular Post</h3>
              {posts.map((post: any) =>
              <a href="#!" onClick={()=>{handleTitleClick(post.slug)}}>
                <div className="fakeimg">
                     <p ><strong>{post.title}</strong></p>
                  <img
                  src={`http://localhost:2500/${post.image?.filename}`}
                  width="150px"
                  height="100px"
                
                />
                </div>
                </a>

              )}

            </div>
          </div>
          {/* <div className="card">
            <h3>Follow Me</h3>
            <p>Some text..</p>
          </div> */}
        </div>
        <Footer />
      </div>

    </>
  )
}
export async function getServerSideProps() {
  const baseURL = "http://localhost:2500/posts";
  let postData
  await axios.get(baseURL).then((response) => {
    console.log("posts data here",response.data.result);
    
    postData = response.data.result

  });
  return { props: { postData: postData } }
}

export default SiglePost