import { Login } from "./component/Login"
import { Home } from "./component/Home"
import Profile from "./component/Profile"
import AboutUs from "./component/AboutUs";
import Contactus from "./component/Contactus";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Footer from "./component/footer";
import Terms from "./component/terms"
import Privacy from "./component/privacy";
import Parking from "./component/Parking";
import Events from "./component/Events";
import Visitor from "./component/Visitor";
import Adminparking from "./Admin-parking";
import Adminvisitor from "./Admin-visitor";
import Password from "./component/password";
import FAQ from "./component/FAQ";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/visitor" element={<Visitor />} />
        <Route path="/parking" element={<Parking />} />
        <Route path="/event" element={<Events />} />
        <Route path="/admin-parking" element={<Adminparking />} />
        <Route path="/admin-visitor" element={<Adminvisitor />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/password" element={<Password />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;


