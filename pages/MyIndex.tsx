import Head from 'next/head';

import styles from '../styles/Home.module.css';
import Nav from './Component/Navbar/Nav';
import PostCard from './Component/post/PostCard';

interface Props{
    posts:Array<{ 
        _id: PostID;
        title: string;
        content: string;
        createdAt: Date;
        published: Date;
     }>
 }
 interface PostID{
    postId:BodyInit
 }
const MyIndex=({ posts }:Props) =>{
    // console.log(posts);
    
    return (
    
            <>
                {posts.length === 0 ? (
                        <h2>No added posts</h2>
                    ) : (
                        <>
                        <div className="grid-container">
                            {posts.map((post, i) => (
                                <PostCard post={post} key={i} />
                            ))}
  

                            </div>
                        </>
                    )}
                </>
         
    );
}

  export default MyIndex




