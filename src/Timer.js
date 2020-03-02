import React, {useState, useEffect} from 'react';
import {useTimer} from "./use-timer";

export const Timer = () => {
    const timer = useTimer();

    return (
        <div>
            <h3>A simple timer</h3>
            <div> Timer is {timer} </div>
        </div>
    );
};

export default Timer


