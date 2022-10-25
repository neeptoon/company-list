import {useDispatch} from 'react-redux';

export const useSelect = (id, action) => {
    const dispatch = useDispatch();
    dispatch(action(id));
};