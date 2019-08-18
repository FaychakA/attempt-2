import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (<div className={classes.dialog}>
        <NavLink to={path} activeClassName={classes.activeLink}>
            {props.name}
        </NavLink>
    </div>)
}

const Message = (props) => {

    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                <DialogItem name={"Andrey"} id={"1"}/>
                <DialogItem name={"Yarik"} id={"2"}/>
                <DialogItem name={"Ira"} id={"3"}/>
                <DialogItem name={"Sancho"} id={"4"}/>
                <DialogItem name={"Jeka"} id={"5"}/>
                <DialogItem name={"Elvira"} id={"6"}/>
                <DialogItem name={"Maman"} id={"7"}/>
                <DialogItem name={"Father"} id={"8"}/>

            </div>
            <div className={classes.messages}>
                <Message message={"Hello"}/>
                <Message message={"How are you?"}/>
                <Message message={"Boom chakalaka"}/>
            </div>
        </div>
    )
}

export default Dialogs;