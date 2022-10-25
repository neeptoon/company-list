import React from 'react';

import {Chooser} from '../Chooser';

export const Tablecaption = ({title}) => {
    return (
        <caption>
            <h3>{title}</h3>
            <Chooser/>
        </caption>
    );
};
