import React from "react";

import "./Button.scss";

const Button = (props) => {
    const { className, text } = props;

    return <div className={className}>
    <button className={`${className}__button`}>{text}</button>
    </div>;
};

export default Button;
