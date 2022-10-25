import React from 'react';

export const Tablecaption = ({title, children}) => {
    return (
        <caption>
            <h3>{title}</h3>
            {children}
        </caption>
    );
};
