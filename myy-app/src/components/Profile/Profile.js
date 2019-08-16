import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return (<div className={classes.content}>
        <div>
            <img src='https://klike.net/uploads/posts/2019-01/1547365376_1.jpg'/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>)
}

export default Profile;