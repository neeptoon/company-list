import {useDispatch} from 'react-redux';

export const useSelect = () => {
    const dispatch = useDispatch();
    const select = (id, action) => {
        dispatch(action(id));
    };
    return select;
};