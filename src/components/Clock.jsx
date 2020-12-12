import React, { useState } from "react";

import {getCurrentTime} from "../Time";

export default function Clock() {
    const [currentTime, setTime] = useState(getCurrentTime());
    setInterval(() => {
        const newCurrentTime = getCurrentTime();
        setTime(newCurrentTime);
    });

    return <h1 className="heading">{currentTime}</h1>;
}
