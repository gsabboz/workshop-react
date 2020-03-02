import {useState, useEffect} from "react";

export const useInputExample1 = (defaultValue = "") => {
    let [value, setValue] = useState(defaultValue);

    const onChange = (element) => {
        setValue(element.target.value)
    };

    return {value, onChange}
};


export const useInputExample2 = (initialValue = "", options = {}) => {
    // console.log(options.persist)
    const initial = options.persist
        ? window.localStorage.getItem(options.persist)
        : initialValue;

    let [value, setValue] = useState(initialValue);

    useEffect(
        () => {
            if (options.persist) {
                window.localStorage.setItem(options.persist, value);
            }
        },
        [value]
    );

    const onChange = (element) => {
        setValue(element.target.value)
    };

    return {
        value,
        isValid: value && value.trim() !== "",
        bind: {
            onChange: e => setValue(e.target.value),
            value
        },
        clear: () => setValue(""),
        reset: () => setValue(initialValue)
    };
};