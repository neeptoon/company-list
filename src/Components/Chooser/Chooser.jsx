import React from 'react';

import classes from './Chooser.module.scss';


export const Chooser = ({value, onChange}) => {
    return (
        <label className={classes.label}>
            <input type="checkbox" checked={value} onChange={onChange}/>
            выделить все
        </label>
    );
};
