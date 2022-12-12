import type { NextPage } from 'next'
import Head from 'next/head';
import { useDispatch } from 'react-redux/es/exports';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Myprofile from './Component/my-profile/myprofile';
import MyIndex from './MyIndex';
import {getAllPosts} from './../store/reducer/postSlice'
// import Ckeditor from './text-editor-blog/Ckeditor';

const Home: NextPage = () => {

const dispatch=useDispatch()

dispatch(getAllPosts())
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
        {/* <MyIndex {...{ posts }} /> */}
        {/* <AddPost/> */}
        <Footer />
      </div>  
    </>
  )
}
export async function getServerSideProps() {
useDispatch()
}
export default Home


