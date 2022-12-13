import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import PostCard from './Component/post/PostCard';
import SiglePost from './Component/post/SiglePost';


const PostSlug = ({posts}:any) => {
 console.log("posts",posts);
 

  return (
    <>
      
     <SiglePost {...{posts}}/>
      
    </>
  )
}
export async function getServerSideProps(ctx:any) {
  var id = ctx.query['post-slug'];

  const baseURL = `http://localhost:2500/post/${id}`;
  let postData
  await axios.get(baseURL).then((response) => {
  postData=response.data.data
    
  });
  return { props: { posts: postData } }
}
export default PostSlug