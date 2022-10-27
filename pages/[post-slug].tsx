import React from 'react'
import { useRouter } from 'next/router'

const PostSlug = ({posts}:any) => {
  
  const router = useRouter()
  const slug = router.query
  const { query } = useRouter();
 
  return (
    <>
      <h1>
        {query['post-slug']}
      </h1>
    </>
  )
}
export async function getServerSideProps() {
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;
  let data = {
    slug: "my-slug-post"
  }
  const res = await fetch(`${dev ? DEV_URL : PROD_URL}/api/posts`,
    {
      method: 'POST',
      body: JSON.stringify(data),
    }
  )
  // const json = await res.json()
  return { props: { posts: "res" } }
}
export default PostSlug