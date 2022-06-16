import "./App.scss";

import { useState } from "react";

import Header from "./containers/Header/Header";
import AddTask from "./components/AddTask/AddTask";
import Tasks from "./containers/Tasks/Tasks";
import NoTasks from "./components/NoTasks/NoTasks";

const App = () => {
    const [taskArray, setTaskArray] = useState([]);
    const [areTasks, setAreTasks] = useState(false);

    const handleAddTasks = (event) => {
        event.preventDefault();
        if (taskArray) {
            setAreTasks(true);
            const task = event.target.task.value;
            if (task !== "") {
                addTask(task);
                event.target.task.value = null;
            } else {
                alert("Enter a task to create an item on your todo list!");
            }
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
        if (taskArray.length - 1 === 0) {
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
