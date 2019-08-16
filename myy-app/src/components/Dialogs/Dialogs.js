import React from 'react';
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + " " + classes.active}>
                    Andrey
                </div>
                <div className={classes.dialog}>
                    Yarik
                </div>
                <div className={classes.dialog}>
                    Ira
                </div>
                <div className={classes.dialog}>
                    Sancho
                </div>
                <div className={classes.dialog}>
                    Jeka
                </div>
                <div className={classes.dialog}>
                    Elvira
                </div>
                <div className={classes.dialog}>
                    Maman
                </div>
                <div className={classes.dialog}>
                    Father
                </div>
            </div>
                <div className={classes.messages}>
                    <div className={classes.message}>Hello</div>
                    <div className={classes.message}>How are you?</div>
                    <div className={classes.message}>Boom chakalaka</div>
                </div>
        </div>
    )
}

export default Dialogs;