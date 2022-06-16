import React from "react";
import "./Tasks.scss";

import Task from "../../components/Task/Task";

const Tasks = (props) => {
    const { taskArray } = props;

    const tasksJSX = taskArray.map((task, index) => {
        return <Task key={index} taskName={task} />;
    });
    return <div className="tasks">{tasksJSX}</div>;
};

export default Tasks;
