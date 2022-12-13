
import type { NextPage } from 'next'
import Head from 'next/head';

import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Myprofile from './Component/my-profile/myprofile';
import MyIndex from './MyIndex';
import axios from 'axios';
import { store } from '../store/store';


const Home: NextPage = ({posts}:any) => {

 
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
        <MyIndex {...{posts}} />
        {/* <AddPost/> */}
        <Footer />
      </div>  
    </>
  )
}
export type AppDispatch = typeof store.dispatch

export async function getServerSideProps() {
  const baseURL = "http://localhost:2500/post";
  let postData
  await axios.get(baseURL).then((response) => {
  postData=response.data.data
    
  });
  return { props: { posts:postData } }
}
export default Home


