import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (<div>
        <div>
            <img src='https://klike.net/uploads/posts/2019-01/1547365376_1.jpg'/>
        </div>
        <div className={classes.descriptionBlock}>
            ava + description
        </div>
    </div>)
}

export default ProfileInfo;