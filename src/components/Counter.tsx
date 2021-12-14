import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import useStyles from './counter-styles';

const Counter = () => {
    const [count, setCount] = useState(0);
    const classes = useStyles();

    const onDecreaseCount = () => {
        setCount(count - 1);
    };
    const onIncrementCount = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <Button className={classes.button} onClick={onDecreaseCount} disabled={count === 0}>
                -
            </Button>
            <Typography>{count}</Typography>
            <Button className={classes.button} onClick={onIncrementCount}>
                +
            </Button>

        </div>
    );
};

export default Counter;