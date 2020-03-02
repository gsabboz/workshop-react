import React, {useState} from "react";

const Counter = (props) => {
    let [value, setValue] = useState(props.initialValue);

    const increase = () => {
        return setValue(value + 1)
    };

    const decrease = () => {
        return setValue(value - 1)
    };

    return (
        <div>
            <div>You clicked {value} times</div>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
        </div>)
};

export default Counter