import React from 'react';

import classes from './Chooser.module.scss';


export const Chooser = () => {
    return (
        <label className={classes.label}>
            <input type="checkbox"/>
            выделить все
        </label>
    );
};
