import { useState } from 'react';
import { useRouter } from 'next/router';
import Image, { ImageProps } from 'next/image';
import Image3 from '../../../assets/images/blog-9.png'
import ReadMore from '../Readmore/ReadMore';

interface Props {
    post: {
        _id: PostID
        title: string,
        body: string,
        slug: string,
        created: Date
    }
}

interface PostID {
    postId: BodyInit
}

export default function PostCard({post}:Props) {
    const [publishing, setPublishing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const router = useRouter();
    console.log("post",post);
    
   
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
                        <h3><a href={post.slug} className="h3">{post.title}</a>
                        </h3>
                        <div className="blog-text">
                            <ReadMore children={post.body}  />
                        </div>
                        <small>{new Date(post.created).toLocaleDateString()}</small>
                        <br />
                       
                    </div>
                </div>
            </div>
        </>
    );
}

