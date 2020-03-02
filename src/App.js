import React, {useState, useEffect, useContext} from 'react';
import "./index.css"
import SubmitForm from "./SubmitForm";
import ToggleExample from "./ToggleExample";
import CounterWithEffect from "./CounterWithEffect";
import WindowMeasurements from "./WindowMeasurements";
import WindowMeasurementsSeperateLogic from "./WindowMeasurementsSeperateLogic";
import {useInputExample2} from "./use-input";
import SubmitForm2 from "./SubmitForm2";
import Timer from "./Timer";
import UserContext1 from "./UserContext1";
import UserContext2 from "./UserContext2";
import CompoundComponent1 from "./CompoundComponent1";

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
            {/*<UserContext1/>*/}
            {/*<UserContext2/>*/}
            <CompoundComponent1/>
        </div>
    )
};

export default App;