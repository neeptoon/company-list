import React from 'react';

import classes from './Container.module.scss';

export const Container = ({children}) => {
    return (
        <div className={classes.container}>
            {children}
        </div>
    );
};

