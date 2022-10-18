import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ShowDetails from "./pages/ShowDetails";

function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path="*" element={<Navigate to="/" replace />}/> */}
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shows/:showName' element={<ShowDetails/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
