import React from "react";

import "./Header.scss";

import Button from "../../components/Button/Button";

const Header = (props) => {
    const { onClick } = props;

    return (
        <div className="header">
            <h1 className="header__heading">Todo's</h1>
            <Button className="reset" text="Reset Tasks" onClick={onClick} />
        </div>
    );
};

export default Header;
