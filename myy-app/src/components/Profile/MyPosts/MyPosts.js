import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={classes.MyPosts}>
                <Post message={'KAVABANGA'} likeCount={' 15'} />
                <Post message={'Vot tak povorot'} likeCount={' 20'} />
                <Post message={'My first post'} likeCount={' 50'} />
            </div>
        </div>
    )
}

export default MyPosts;