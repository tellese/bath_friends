import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landingpage from "./Landingpage";
import Suggestions from "../Sub/Suggestions";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <div style={{ minHeight: '100vh', width:'1440px', margin: '0 auto' }}>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/suggest" element={<Suggestions />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;