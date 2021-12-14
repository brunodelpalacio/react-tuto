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
            <Button onClick={onDecreaseCount}>Decrease Count</Button>
            <Typography>Current value: {count}</Typography>
            <Button onClick={onIncrementCount}>Increment Count</Button>
            <Counter />
        </div>
    );
};

export default Counter;