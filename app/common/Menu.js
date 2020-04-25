import React from 'react';

const Menu = ({ pageState, updatePageState }) => {
    const onClick = (page) => updatePageState(page);
    
    return (
        <div className="MenuContainer">
            <div className="Burger">
                <select id="Dropdown">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            <span id="PageName">{pageState}</span>
        </div>
    );
};

export default Menu;