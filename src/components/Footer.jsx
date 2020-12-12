import React from "react";
import { getCurrentYear } from "../Time";

export default function Footer() {
    const currentYear = getCurrentYear();
    return (
        <div className="footer">
            <p>Create By Bashir Uddin {currentYear}</p>
        </div>
    );
}
