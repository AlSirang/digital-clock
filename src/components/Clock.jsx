import React, { useState } from "react";

import { getCurrentTime, getTimeZone, getCurrentDate } from "../Time";

export default function Clock() {
    const [currentTime, setTime] = useState(getCurrentTime());
    setInterval(() => {
        const newCurrentTime = getCurrentTime();
        setTime(newCurrentTime);
    });

    return (
        <div>
            <h1 className="heading">{currentTime}</h1>
            <p className="sub-heading">{getCurrentDate()}</p>
            <p className="sub-heading">{getTimeZone()}</p>
        </div>
    );
}
