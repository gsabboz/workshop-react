import React, {useEffect, useState} from "react";

const WindowMeasurements = () => {

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const resizeHandler = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        resizeHandler();
        window.addEventListener("resize", resizeHandler);

        return () => window.removeEventListener("resize", resizeHandler);
        //An empty array means that the effect will only be initialized on lifecycle componentWillMount
    }, []);

    return (<div>
        <p>The width is {width}</p>
        <p>The height is {height}</p>
    </div>)
};

export default WindowMeasurements