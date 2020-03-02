import React, {useContext, useState} from "react";

export const SelectContext = React.createContext({});


const Select = ({children}) => {
    const [selectedOption, setSelectedOption] = useState();
    const [opened, setOpened] = useState(false);

    const selectOption = option => {
        setSelectedOption(option);
        setOpened(false);
    };

    const open = () => {
        setOpened(true);
    };

    if (opened) {
        return (
            <SelectContext.Provider value={{selectedOption, selectOption}}>
                {children}
            </SelectContext.Provider>
        );
    } else {
        return (
            <div className="select" onClick={open}>
                {selectedOption ? selectedOption.children : "Pick one"}
            </div>
        );
    }
};

const Option = ({children, value}) => {
    const {selectedOption, selectOption} = useContext(SelectContext);
    const isActive = selectedOption && selectedOption.value === value;

    return (
        <div
            className="option"
            style={{
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "#ffffff" : "#ee0700"
            }}
            onClick={() => selectOption({value, children})}
        >
            {children}
        </div>
    );
};

const CompoundComponent1 = () => {

    return (
        <div>
            <p>Select and option</p>
            <Select>
                <Option value="blue"> Blue </Option>
                <Option value="red"> Red </Option>
                <Option value="white"> White </Option>
            </Select>
        </div>
    )
};

export default CompoundComponent1