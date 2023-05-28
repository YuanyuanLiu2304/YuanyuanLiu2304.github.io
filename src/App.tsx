import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { Navbar } from "./Nav/Navbar";
import { Resume } from "./Resume/Resume";
import { Projects } from "./Projects/Projects";
import { Contact } from "./Contact/Contact";
import { StudentInfoSysDemo } from "./Projects/StudentInfoSys/StudentInfoSysDemo";
import { Calculator } from "./Projects/Calculator/Calculator";
import { TaskList } from "./Projects/ToDoList/ToDoList";
import { RecipeFinder } from "./Projects/RecipeFinder/RecipeFinder";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />}>
            Home
          </Route>
          <Route path="/Resume" element={<Resume />}>
            Resume
          </Route>
          <Route path="/" element={<Projects />}>
            Projects
          </Route>
          <Route path="/Contact" element={<Contact />}>
            Contact
          </Route>
          <Route path="/Projects/Calculator" element={<Calculator />}>
            Basic Calculator
          </Route>
          <Route path="/Projects/TaskList" element={<TaskList />}>
            Task List
          </Route>
          <Route
            path="/Projects/StudentInfoSysDemo"
            element={<StudentInfoSysDemo />}
          >
            Student_Info_Sys_Demo
          </Route>
          <Route path="/Projects/RecipeFinder" element={<RecipeFinder />}>
            Student_Info_Sys_Demo
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
