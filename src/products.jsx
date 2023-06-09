import React from "react";
import MovingBanner from "./movingBanner";

export default function Products () {
    return (
        <div>
            <div className="movingProducts"><MovingBanner /></div>
            <div className="movingProducts"><MovingBanner /></div>
            <div className="movingProducts"><MovingBanner /></div>
        </div>
    );
}