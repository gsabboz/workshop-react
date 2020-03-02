import React, {useState, useEffect} from 'react';
import SubmitForm from "./SubmitForm";
import ToggleExample from "./ToggleExample";
import CounterWithEffect from "./CounterWithEffect";
import WindowMeasurements from "./WindowMeasurements";
import WindowMeasurementsSeperateLogic from "./WindowMeasurementsSeperateLogic";
import {useInputExample2} from "./use-input";


//Use the useEffect hook to measure the size of the window when it changes.
// Use the window.addEventListener('resize', handler) api

const SubmitForm2 = () => {

    const email = useInputExample2("", { persist: "email" });
    const password = useInputExample2("", { persist: "password" });

    return (
        <div>
            <div>
                <h3>A simple form</h3>
                <div>
                    <input placeholder="username" type="text" {...email.bind} />
                </div>
                <div>
                    <input placeholder="password" type="password" {...password.bind} />
                </div>
                <button onClick={() => console.log(`email value: ${email.value} password value: ${password.value}`)} >submit</button>
            </div>
        </div>
    )

}

const App = () => {

    return (
        <div>
            {/*<SubmitForm/>*/}
            <SubmitForm2/>
            {/*<ToggleExample/>*/}
            {/*<CounterWithEffect/>*/}
            {/*<WindowMeasurements/>*/}
            {/*<WindowMeasurementsSeperateLogic/>*/}
        </div>
    )
};

export default App;