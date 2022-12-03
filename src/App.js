import Home from './Pages/Home'
import Login from './Pages/Login'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Register from './Pages/Register'
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
