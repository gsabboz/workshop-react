import React, {useEffect, useState} from "react";


const useDocumentTitle = (title) => {
    //effect kinda replace lifecycle of react (componentWill....)
    useEffect(() => {
        window.document.title = title
        //    specify a exact effect you want to monitor
        //    Otherwise it will be updated on every change
    }, [title]);
};

const CounterWithEffect = () => {
    let [counter, setValue] = useState(0);


    const increase = () => {
        return setValue(counter + 1)
    };

    const decrease = () => {
        return setValue(counter - 1)
    };

    useDocumentTitle(`Counter is ${counter}`);


    return (
        <div>
            <button onClick={increase}>increase</button>
            <div>counter is {counter}</div>
            <button onClick={decrease}>decrease</button>
        </div>)
};

export default CounterWithEffect