import React from "react";

import "./AddTask.scss";

import addTaskImg from "../../assets/images/add-task.png";

const AddTask = (props) => {
    const { onClick } = props;

    return (
        <div className="add-task">
            <form action="" className="add-task__form" onSubmit={onClick}>
                <input
                    name="task"
                    type="text"
                    className="add-task__input"
                    placeholder="Add a task..."
                />
          
                <input
                    className="add-task__img"
                    src={addTaskImg}
                    alt="Submit Add Task"
                    type="image"
                />
            </form>
        </div>
    );
};

export default AddTask;
