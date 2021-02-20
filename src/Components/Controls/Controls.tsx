import React, { useState } from 'react';
import './Controls.css';

type Props = {
    setTimeInSeconds: Function
};
const Controls = (props: any) => {
    const { setTimeInSeconds } = props;

    const [intervalId, setIntervalId] = useState<number>(0);

    const handlePlayButton = () => {
        let interval: any = setInterval(() => {
            setTimeInSeconds((previousState: number) => previousState +1)
        }, 1000);

        setIntervalId(interval);
    }

    const handleStopButton = () => {
        clearInterval(intervalId);
    }

    const handleResetButton = () => {
        clearInterval(intervalId);
        setTimeInSeconds(0);
    }

    return (
        <section className="controls-container">
            <button onClick={ handlePlayButton }>Play</button>
            <button onClick={ handleStopButton }>Stop</button>
            <button onClick={ handleResetButton }>Reset</button>
        </section>
    );
};

export default Controls
