import React, { useState } from 'react';
import Nav from '../Navbar/Nav';
import styles from '../../../styles/Home.module.css';
import Ckeditor from '../../text-editor-blog/Ckeditor';

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handlePost = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setMessage('');

        if (!title || !content) return setError('All fields are required');

        let post = {
            title,
            content,
            published: false,
            createdAt: new Date().toISOString(),
        };
        console.log('post', post);

        // save the post
        let response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify(post),
        });

        let data = await response.json();

        if (data.success) {
            setTitle('');
            setContent('');
            return setMessage(data.message);
        } else {
            return setError(data.message);
        }
    };

    return (
        <div>
            <Nav />
            <div className={styles.container}>
                <form onSubmit={handlePost} className={styles.form}>
                    <div className="mb-3">
                        <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="exampleFormControlInput1" placeholder="tittle" />
                    </div>
                    {error ? (
                        <div className={styles.formItem}>
                            <h3 className={styles.error}>{error}</h3>
                        </div>
                    ) : null}
                    {message ? (
                        <div className={styles.formItem}>
                            <h3 className={styles.message}>{message}</h3>
                        </div>
                    ) : null}

                    <Ckeditor {...{ content, setContent }} />
                    <div className={styles.formItem}>
                        <button type="submit">Add post</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default AddPost