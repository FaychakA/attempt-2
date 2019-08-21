import React from 'react';
import classes from './SiteBar.module.css'
import FriendSiteBar from "./friendSiteBar/friendSiteBar";

const SiteBar = (props) => {

    let friendsOnline = props.friendsOnline.friendsOnline.map(friendsOnline => <FriendSiteBar
        ava={friendsOnline.ava} name={friendsOnline.name} id={friendsOnline.id}/>)

    return (
        <div>
            <div>
                <h3 className={classes.h3}>Friends</h3>
            </div>
            <div className={classes.fo}>
                {friendsOnline}
            </div>
        </div>
    )
}
export default SiteBar;