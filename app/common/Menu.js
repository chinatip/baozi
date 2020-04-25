import React from 'react';

const Menu = ({ pageState, changePage }) => {
    const onClick = (e) => changePage(e.target.value);
    
    return (
        <div className="MenuContainer">
            <div className="Burger">
                <PageDropdown onClick={onClick}/>
            </div>
            <span id="PageName">{pageState}</span>
        </div>
    );
};

const PageDropdown = ({ onClick }) => {
    const pages = ['Vocabulary', 'Practice', 'Flashcard'];
    const option = (value, i) => <option key={i} value={value}>{value}</option>;

    return (
        <select id="Dropdown" onChange={onClick}>
            { pages.map((p, i) => option(p, i))}
        </select>
    )
};

export default Menu;