import React from 'react';

import {NavLink} from "react-router-dom";


const FriendSiteBar = (props) => {


    return (<div>
        <div>
            <img src={"" + props.ava}/>
        </div>
        <div>
            {props.name}
        </div>

    </div>)
}


export default FriendSiteBar;