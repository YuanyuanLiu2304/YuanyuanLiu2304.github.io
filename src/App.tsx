import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DemoPerson } from "./Person";
import { Navbar } from "./Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<DemoPerson />}>
            DemoPerson
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
