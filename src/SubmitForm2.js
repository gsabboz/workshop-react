import {useInputExample2} from "./use-input";
import React from "react";

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

};

export default SubmitForm2;