function getCurrentTime() {
    return new Date().toLocaleTimeString("en-US", { hour12: false });
}

function getCurrentYear() {
    return new Date().getFullYear();
}

export { getCurrentTime, getCurrentYear };
