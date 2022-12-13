import Head from 'next/head';
import PostCard from './Component/post/PostCard';

interface Props {
    posts: Array<{
        _id: PostID;
        title: string;
        content: string;
        createdAt: Date;
        published: Date;
    }>
}
interface PostID {
    postId: BodyInit
}
const MyIndex = () => {

    return (

        <>
            <div className="grid-container">
                <PostCard />
            </div>
        </>



    );
}

export default MyIndex




