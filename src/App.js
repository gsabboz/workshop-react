import React, {useState, useEffect} from 'react';
import SubmitForm from "./SubmitForm";
import ToggleExample from "./ToggleExample";
import CounterWithEffect from "./CounterWithEffect";
import WindowMeasurements from "./WindowMeasurements";
import WindowMeasurementsSeperateLogic from "./WindowMeasurementsSeperateLogic";
import {useInputExample2} from "./use-input";
import SubmitForm2 from "./SubmitForm2";
import Timer from "./Timer";


//Use the useEffect hook to measure the size of the window when it changes.
// Use the window.addEventListener('resize', handler) api


const App = () => {

    return (
        <div>
            {/*<SubmitForm/>*/}
            {/*<SubmitForm2/>*/}
            {/*<ToggleExample/>*/}
            {/*<Timer/>*/}
            {/*<CounterWithEffect/>*/}
            {/*<WindowMeasurements/>*/}
            {/*<WindowMeasurementsSeperateLogic/>*/}
        </div>
    )
};

export default App;