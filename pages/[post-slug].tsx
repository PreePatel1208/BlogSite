import React from 'react'
import { useRouter } from 'next/router'


const PostSlug = () => {
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

export default PostSlug