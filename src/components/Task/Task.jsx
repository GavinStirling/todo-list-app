import React from "react";

import "./Task.scss";

const Task = (props) => {
    const { taskName } = props;

    return (
        <div className="task">
            <input className="task__input" id="task_item" type="checkbox" />
            <label className="task__label" htmlFor="task_item">{taskName}</label>
            <img className="task__delete-img" src="" alt="Delete Task" />
        </div>
    );
};

export default Task;
