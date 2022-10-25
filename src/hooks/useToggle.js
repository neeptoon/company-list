import {useState} from 'react';

function useToggle(initialValue) {
    const [value, setValue] = useState(initialValue);

    const toggle = () => {
        setValue(!value);
    };

    return [value, toggle];
}

export {useToggle};