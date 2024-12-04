import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//All 
import Lead from "./pages/Lead/Lead"


function App() {

  return (
    <>
      <Router>
        <div>
          <Routes>
            {/* For Temporary  */}
            <Route path="/" element={<Lead />} />   
            <Route path="/lead" element={<Lead />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
