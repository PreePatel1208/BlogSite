import { useState } from 'react';
import { useRouter } from 'next/router';

interface Props{
   post:{ 
    title: string,
     content: string
     createdAt:Date
    }
}
// let test1 : Details 

export default function PostCard({ post }:Props) {
    return (
        <>
            <li>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <small>{new Date(post.createdAt).toLocaleDateString()}</small>
                <br />
                    <button type="button">
                        {'Publish'}
                    </button>
                <button type="button" >
                    {'Delete'}
                </button>
            </li>
        </>
    );
}