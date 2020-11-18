import React, { useState, useEffect } from "react";

const getTimeString = () => {
    const date = new Date(Date.now()).toLocaleTimeString();
    return date;
}

const ClockApp = () => {
    const [time, setTime] = useState(getTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            let date = getTimeString();
            setTime(date);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

const newTime = new Date().toLocaleString("en-Us", {timeZone: "America/Los_Angeles"});

    return (
        <div>
            <h1 className="section-title">React Clock</h1>
            <hr className="explanation" />
            <p>{time}</p>
            <h1>West Coast</h1>
            <p>{newTime}</p>
        </div>
    );
}

export default ClockApp;