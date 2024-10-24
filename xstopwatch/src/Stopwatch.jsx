import { useState, useRef } from "react"

const calculateTime = (time) => {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    return `${minutes}:${seconds < 10 ? 0 : ""}${seconds}`;
}

export default function StopWatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    let id = useRef(null);

    const clickHandler = () => {
        if (!isRunning) {
            id.current = setInterval(() => setTime(prev => prev + 1), 1000);
        }
        else {
            clearInterval(id.current);
        }
        setIsRunning(prev => !prev);
    }

    const resetHandler = () => {
        clearInterval(id.current);
        setIsRunning(false);
        setTime(0);
    }

    return (
        <>
            <h1>Stopwatch</h1>
            <p>Time: {calculateTime(time)}</p>
            <button onClick={clickHandler}>{isRunning ? "Stop" : "Start"}</button>
            <button onClick={resetHandler}>Reset</button>
        </>
    )
}