import React from 'react';

import classes from './Chooser.module.scss';


export const Chooser = ({value, handleChooserChange}) => {
    return (
        <label className={classes.label}>
            <input type="checkbox" checked={value} onChange={handleChooserChange}/>
            выделить все
        </label>
    );
};
