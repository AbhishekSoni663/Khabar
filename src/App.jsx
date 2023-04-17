import Navbar from "./Components/Navbar";
import { NewsProvider } from "./Context/NewsContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Sport from "./Pages/Sport";
import { SportProvider } from "./Context2/SportContext";
import Entertainment from "./Pages/Entertainment";
import { EnterProvider } from "./Context3/EnterContext";
import DarkMode from "./Components/SecondNavBar";

function App() {
  return (
    <Router>
      <NewsProvider>
        <SportProvider>
          <EnterProvider>  
              <Navbar />
              <DarkMode />
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/sport" element={<Sport />} />
                <Route path="/entertainment" element={<Entertainment />} />
              </Routes>      
          </EnterProvider>
        </SportProvider>
      </NewsProvider>
    </Router>
  );
}

export default App;
