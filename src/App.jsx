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
            addTask(task);
            event.target.task.value = "";
        } else if (event) {
        }
    };

    const addTask = (task) => {
        const tempArray = [...taskArray];
        tempArray.unshift(task);
        setTaskArray(tempArray);
    };

    const handleReset = () => {
        setTaskArray([]);
        setAreTasks(false);
    };

    return (
        <div className="App">
            <Header onClick={handleReset} />
            <AddTask onClick={handleAddTasks} />
            {areTasks ? <Tasks taskArray={taskArray} /> : <NoTasks />}
        </div>
    );
};

export default App;
