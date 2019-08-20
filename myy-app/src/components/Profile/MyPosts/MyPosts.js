import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {



    let postsElement = props.postsData.map( post => <Post message={post.post} likeCount={post.likeCount} />);

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={classes.MyPosts}>

                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;