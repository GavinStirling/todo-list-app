import React from "react";

import "./Button.scss";

const Button = (props) => {
    const { className, text, onClick } = props;

    return <div className={className}>
    <button onClick={onClick} className={`${className}__button`}>{text}</button>
    </div>;
};

export default Button;
