import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ShowDetails from "./pages/ShowDetails";

function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />}/>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shows/:showName' element={<ShowDetails/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
