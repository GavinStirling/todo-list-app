import React, { useState } from "react";

import "./Task.scss";

import deleteIcon from "../../assets/images/delete.png";

const Task = (props) => {
    const { taskName } = props;
    const [checked, setChecked] = useState(false);

    const handleCheckBox = () => {
        if (!checked) {
            setChecked(true);
            completed();
        } else {
            setChecked(false);
        }
    };

    const completed = () => {
        return (
            <>
                <label className="task__label completed" htmlFor="task_item">
                    {taskName}
                </label>
            </>
        );
    };

    const notCompleted = () => {
        return (
            <>
                <label className="task__label" htmlFor="task_item">
                    {taskName}
                </label>
            </>
        );
    };

    return (
        <div className="task">
            <div className="task__left">
                <input
                    className="task__input"
                    id="task_item"
                    type="checkbox"
                    onClick={handleCheckBox}
                />
                {checked ? completed() : notCompleted()}
            </div>

            <img
                className="task__delete-img"
                src={deleteIcon}
                alt="Delete Task"
            />
        </div>
    );
};

export default Task;
