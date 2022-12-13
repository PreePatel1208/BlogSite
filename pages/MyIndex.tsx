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
const MyIndex = ({ posts }: any) => {
    console.log("myin", posts);

    return (

        <>
            <div className="grid-container">
                {posts.map((post: any) =>
                    <PostCard {...{ post }} />
                )}

            </div>
        </>

    );
}

export default MyIndex




