import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.dialogs.map(dialog => <DialogItem
        ava={dialog.ava} name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.dialogs.messages.map(message => <Message
        message={message.message} id={message.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs;