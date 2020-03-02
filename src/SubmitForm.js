import {useInputExample1} from "./use-input";
import React from "react";

const SubmitForm = () => {
    const email = useInputExample1('');
    const password = useInputExample1('');

    return (
        <div>
            <input type="text" value={email.value} onChange={email.onChange}/>
            <input type="password" value={password.value} onChange={password.onChange}/>
            <button onClick={() => console.log(`email value: ${email.value} password value: ${password.value}`)}>display
                example
            </button>
        </div>
    )
};

export default SubmitForm;