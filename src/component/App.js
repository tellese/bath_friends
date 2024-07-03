import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landingpage from "./Landingpage";
import Suggestions from "../Sub/Suggestions";


function App() {
  return (
    <div className="App">
      <div style={{ minHeight: '100vh', width: '1440px' }}>
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/suggest" element={<Suggestions />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;