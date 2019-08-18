import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (<header className={classes.header}>
        <div className={classes.logo}>
        <span>
        <img
            src='http://catchsplace.club/wp-content/uploads/bl/thumb-black-silhouette-of-cat-vector.jpg'/>
        </span>
            <span>
            <img
                src='https://st2.depositphotos.com/1972501/11226/v/950/depositphotos_112267480-stock-illustration-cute-cat-vector-logo.jpg'/>
        </span>
            <span>
            <img
                src='https://i.pinimg.com/originals/62/31/96/62319665361523196c5d56cc28ff861f.jpg'/>
        </span>
            <h1 className={classes.tittle}>Cats and their life</h1>
        </div>
    </header>)
}

export default Header;