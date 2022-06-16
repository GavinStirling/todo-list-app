import "./App.scss";

import { useState, useEffect } from "react";

import Header from "./containers/Header/Header";
import AddTask from "./components/AddTask/AddTask";
import Tasks from "./containers/Tasks/Tasks";
import NoTasks from "./components/NoTasks/NoTasks";

const App = () => {
    const [taskArray, setTaskArray] = useState([1, 2, 3, 4, 5]);
    const [areTasks, setAreTasks] = useState(false);

    const handleAddTasks = (event) => {
        event.preventDefault();
        if (taskArray) {
            setAreTasks(true);
            const task = event.target.task.value;
            addTask(task);
            event.target.task.value = "";
        }
    };

    const addTask = (task) => {
        const tempArray = [...taskArray];
        tempArray.unshift(task);
        setTaskArray(tempArray);
    };

    const removeTask = (event) => {
        const index = event.target.id;
        const tempArray = [...taskArray];
        tempArray.splice(index, 1);
        setTaskArray(tempArray);
        checkEmpty();
    };

    const checkEmpty = () => {
      const tempArray = [...taskArray];
        if (!tempArray) {
            setAreTasks(false);
        }
    };

    const handleReset = () => {
        setTaskArray([]);
        setAreTasks(false);
    };



    return (
        <div className="App">
            <Header onClick={handleReset} />
            <AddTask onClick={handleAddTasks} />
            {areTasks ? (
                <Tasks onRemove={removeTask} taskArray={taskArray} />
            ) : (
                <NoTasks />
            )}
        </div>
    );
};

export default App;
