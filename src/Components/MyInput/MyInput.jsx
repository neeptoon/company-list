import classes from './MyInput.module.scss';

export const MyInput = (props) => {
    return (
        <input
            className={classes.field}
            type="text"
            {...props}
        />
    );
};
