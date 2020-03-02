import {useState} from "react";

const useToggle = (initialValue = true) => {
    const [value, setToggle] = useState(initialValue);

    const inverse = () => {
        setToggle(!value)
    };

    return {value, inverse}
};

export default useToggle