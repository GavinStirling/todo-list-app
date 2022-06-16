import "./App.scss";

import Header from "./containers/Header/Header";
import Tasks from "./containers/Tasks/Tasks";

const App = () => {
    return (
        <div className="App">
            <Header />
            <Tasks />
        </div>
    );
};

export default App;
