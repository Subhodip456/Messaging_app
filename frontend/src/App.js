import Home from './Pages/Home'
import Login from './Pages/Login'
import ProtectedRoutes from './components/ProtectedRoutes';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Register from './Pages/Register'
import UserAuth from './components/UserAuth';
function App() {
  const [isAuth,login,logout,register] = UserAuth(false)
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register register={register}/>}/>
          <Route path="/login" element={<Login login={login}/>}/>
          <Route exact path='/' element={<ProtectedRoutes isAuth={isAuth}/>}>
              <Route path="/home" element={<Home logout={logout}/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

// {/* <Route path="/home" element={<Home/>}/> */}
