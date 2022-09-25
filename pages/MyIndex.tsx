import Head from 'next/head';

import styles from '../styles/Home.module.css';
import Nav from './Component/Navbar/Nav';
import PostCard from './Component/post/PostCard';


interface Props{
    posts:Array<{ 
     title: string,
      content: string
      createdAt:Date
     }>
 }

export default function MyIndex({ posts }:Props) {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>

            <Nav/>

            <main>
                <div className={styles.container}>
                    {posts.length === 0 ? (
                        <h2>No added posts</h2>
                    ) : (
                        <ul>
                            {posts.map((post, i) => (
                                <PostCard post={post} key={i} />
                            ))}
                        </ul>
                    )}
                </div>
            </main>
        </div>
    );
}

export async function getServerSideProps() {

  return {
      props: {
          posts: ['message'],
      },
  };
}