import { useState } from 'react';
import { useRouter } from 'next/router';
import Image, { ImageProps } from 'next/image';
import Image3 from '../../../assets/images/blog-9.png'
import ReadMore from '../Readmore/ReadMore';

interface Props {
    post: {
        _id: PostID
        title: string,
        content: string
        createdAt: Date
        published: Date
    }
}

interface PostID {
    postId: BodyInit
}

export default function PostCard() {
    const [publishing, setPublishing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const router = useRouter();
    // const publishPost = async (postId:any) => {
    //     setPublishing(true);

    //     try {
    //         await fetch('/api/posts', {
    //             method: 'PUT',
    //             body: postId,
    //         });
    //         setPublishing(false);
    //         return router.push(router.asPath);
    //     } catch (error) {
    //         return setPublishing(false);
    //     }
    // };

    // const deletePost = async (postId:any) => {
    //     setDeleting(true);
    //     try {
    //         console.log('object id', postId);
    //         const response = await fetch('/api/posts', {
    //             method: 'DELETE',
    //             body: postId,
    //         });
    //         let data = await response.json();
    //         console.log('response', data);
    //         setDeleting(false);
    //         console.log("deleting");
    //     } catch (error) {
    //         return setDeleting(false);
    //     }
    // };
const handleTitleClick=()=>{
    router.push('/counter=10')
}
    return (
        <>
            <div className="grid-item">
                <div className="blog-card">
                    <div className="blog-card-banner">
                        <Image
                            src={Image3}
                            layout="intrinsic"
                            className="blog-banner-img"
                        />
                    </div>
                    <div className="blog-content-wrapper">
                        <button className="blog-topic text-tiny">Accessibility</button>
                        <h3><a href="" className="h3">Hello World</a>
                        </h3>
                        <div className="blog-text">
                            <ReadMore children="The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal"  />
                        </div>
                        {/* <small>{new Date(post.createdAt).toLocaleDateString()}</small> */}
                        {/* <br /> */}
                        {/* {!post.published ? (
                    <button type="button" onClick={() => publishPost(post._id)}>
                        {publishing ? 'Publishing' : 'Publish'}
                    </button>
                ) : null}
                <button type="button" onClick={() => {deletePost(post._id);}
                }>
                    {deleting ? 'Deleting' : 'Delete'}
                </button> */}
                    </div>
                </div>
            </div>
        </>
    );
}

