import type { NextPage } from 'next'
import Head from 'next/head';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Myprofile from './Component/my-profile/myprofile';
import MyIndex from './MyIndex';
// import Ckeditor from './text-editor-blog/Ckeditor';

const Home: NextPage = () => {

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
        <MyIndex />
        {/* <AddPost/> */}
        <Footer />
      </div>  
    </>
  )
}

  
export default Home


