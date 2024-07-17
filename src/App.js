import "./App.css";
import AddTask from "./Shared/components/AddTask";
import Caption from "./Shared/components/Caption";
import Moods from "./Shared/components/Moods";
import Task from "./Shared/components/Task";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Moods />
        <Caption />
        <AddTask />
        <Task />
      </div>
    </div>
  );
}

export default App;
