import { Login } from "./component/Login"
import { Home } from "./component/Home"
import  Profile  from "./component/Profile"
// import Aboutus from "./component/Aboutus";
import Contactus from "./component/Contactus";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;


