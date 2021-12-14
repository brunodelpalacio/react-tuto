import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';


const Counter = () => {
    const [count, setCount] = useState(0);
    const onDecreaseCount = () => {
        setCount(count - 1);
    };
    const onIncrementCount = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <Button onClick={onDecreaseCount}>
                -
            </Button>
            <Typography>{count}</Typography>
            <Button onClick={onIncrementCount}>
                +
            </Button>

        </div>
    );
};

export default Counter;