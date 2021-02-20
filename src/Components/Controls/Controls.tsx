import React from 'react';
import './Controls.css';

type Props = {
    setTimeInSeconds: Function
};
const Controls = (props: any) => {
    return (
        <section className="controls-container">
            <button>Play</button>
            <button>Stop</button>
            <button>Reset</button>
        </section>
    )
}

export default Controls
