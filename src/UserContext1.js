import React, {useContext} from "react";

const UserContext = React.createContext({name: "John", surname: "Lennon"});

const Header = () => {
    const user = useContext(UserContext);
    return (<div>The name is {user.name}</div>)
};

const Footer = () => {
    const user = useContext(UserContext);
    return (<div>The surname is {user.surname}</div>)
};

const UserContext1 = () => {
    return (
        <UserContext.Provider value={{name: "John", surname: "Lennon"}}>
            <Header/>
            <Footer/>
        </UserContext.Provider>)
};

export default UserContext1