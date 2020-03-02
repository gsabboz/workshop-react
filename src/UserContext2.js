import React, {useContext, useState} from "react";

const UserContext = React.createContext({name: "John", surname: "Lennon"});

const useInput = defaultValue => {
    const [value, setValue] = useState(defaultValue);

    return {
        value,
        onChange: e => setValue(e.target.value)
    };
};

function LoginForm() {
    const {setUser} = useContext(UserContext);

    const name = useInput("");
    const surname = useInput("");

    const submit = () => {
        let user = {name: name.value, surname: surname.value};
        setUser(user);
    };

    return (
        <div>
            <input placeholder="name" type="text" {...name} />
            <input placeholder="surname" type="text" {...surname} />
            <button onClick={() => console.log(`name=${name.value} surname=${surname.value}`)}> submit</button>
        </div>
    );
}

const UserContext2 = () => {

    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={{user, setUser}}>
            <LoginForm/>
        </UserContext.Provider>
    )
};

export default UserContext2