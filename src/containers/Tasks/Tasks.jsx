import React from "react";
import "./Tasks.scss";

import Task from "../../components/Task/Task";

const Tasks = (props) => {
    const { taskArray, onRemove } = props;

    const tasksJSX = taskArray.map((task, index) => {
        return <Task key={index} index={index} taskName={task} onRemove={onRemove} />;
    });
    return <div className="tasks">{tasksJSX}</div>;
};

export default Tasks;
