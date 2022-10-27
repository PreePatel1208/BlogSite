import type { NextPage } from 'next'
import Head from 'next/head';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Myprofile from './Component/my-profile/myprofile';
import MyIndex from './MyIndex';
// import Ckeditor from './text-editor-blog/Ckeditor';

const Home: NextPage = ({ posts }:any) => {
console.log("posts",posts);

  return (
    <>
      <Head>
        <title>Aashaye</title>
      </Head>

      {/* <Nav/> */}
      {/* <body className="light-theme"></body> */}
      <div className="dark-theme">
        <Header />
        <Myprofile />
        <MyIndex {...{ posts }} />
        {/* <AddPost/> */}
        <Footer />
      </div>  
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


