import "./App.css";
import AddTask from "./Shared/components/AddTask";
import Caption from "./Shared/components/Caption";
import Moods from "./Shared/components/Moods";
import TasksContainer from "./Shared/components/TasksContainer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Moods />
        <Caption />
        <AddTask />
        <TasksContainer />
      </div>
    </div>
  );
}

export default App;
