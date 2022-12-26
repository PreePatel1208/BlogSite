import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import PostCard from './Component/post/PostCard';
import SiglePost from './Component/post/SiglePost';


const PostSlug = ({post,posts}:any) => {
  return (
    <>    
     <SiglePost {...{post,posts}}/>   
    </>
  )
}
export async function getServerSideProps(ctx:any) {
  var id = ctx.query['post-slug'];

  const baseURL = `http://localhost:2500/posts/${id}`;
  let postData
  await axios.get(baseURL).then((response) => {
  postData=response.data.data
    
  });
  let posts
  await axios.get("http://localhost:2500/posts").then((response) => {
    console.log("posts data here",response.data.result);
    
    posts = response.data.result

  });
  return { props: { post: postData,posts:posts } }
}
export default PostSlug