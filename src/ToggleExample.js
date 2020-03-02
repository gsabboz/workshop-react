import useToggle from "./use-toggle";
import Counter from "./Counter";
import React from "react";

const ToggleExample = () => {
    const toggle = useToggle(false);

    return (
        <div>
            <p>A toggle button</p>
            <button onClick={toggle.inverse}>{toggle.value ? "show" : "hide"} counter</button>
            {toggle.value && <Counter initialValue={0}/>}
        </div>)
};

export default ToggleExample