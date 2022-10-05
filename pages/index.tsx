import type { NextPage } from 'next'
import Head from 'next/head';


import MyIndex from './MyIndex'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import AddPost from './Component/post/add-post'

import styles from '../styles/Home.module.css';
import Nav from './Component/Navbar/Nav';
import PostCard from './Component/post/PostCard';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import MyBlog from './Component/MyBlog';
import Myprofile from './Component/my-profile/myprofile';
import Editor from './text-editor-blog/Editor2';
import { MyEditor } from './text-editor-blog/RichTextEditor';
// import MyEditor from './text-editor-blog/RichTextEditor';

const Home: NextPage = ({ posts }) => {

  return (

    <>
      <Head>
        <title>Aashaye</title>
      </Head>

      {/* <Nav/> */}
      {/* <body className="light-theme"></body> */}
      {/* <div className="dark-theme"> */}
        {/* <Header /> */}
        {/* <Myprofile /> */}

        {/* <MyIndex {...{ posts }} /> */}
        {/* <AddPost/> */}
        {/* <Footer /> */}
      {/* </div> */}
      <MyEditor/>
      {/* <RichTextEditor/> */}
    </>
  )
}
export async function getServerSideProps() {
  let dev = process.env.NODE_ENV !== 'production';

  let { DEV_URL, PROD_URL } = process.env;
  const res = await fetch(`${dev ? DEV_URL : PROD_URL}/api/posts`,
    {
      method: 'GET',
    }
  )
  const json = await res.json()
  return { props: { posts: json.message } }

}



export default Home


