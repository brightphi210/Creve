
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/SIgnUp";
import SignupTwo from "./pages/SignUp2";
import SignOption from "./pages/SignOption";

import DashHome from "./pages/DashHome";
import DashCreate from "./pages/DashCreate";
import DashWork from "./pages/DashWork";

import Creatives from "./pages/Creatives";

import CreativeSingle from "./pages/CreativeSingle";
import CreativeSinglePart from "./components/Creatives/CreativeSinglePart";


import Works from "./pages/Works";
import WorkSingle from "./pages/WorkSingle";

import { AuthProvider } from "./utils/AuthContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="creatives" element={<Creatives />} />
              <Route path="creatives/:id" element={<CreativeSingle />} />

              
              <Route path="works" element={<Works />} />
              <Route path="works/:id" element={<WorkSingle />} />


              <Route path="login" element={<Login />} />
              <Route path="creative/signup" element={<Signup />} />
              <Route path="user/signup" element={<SignupTwo />} />
              <Route path="signup/Option" element={<SignOption />}></Route>


              <Route path="dashboard" element={<DashHome/>}></Route>
              <Route path="dashboard/create" element={<DashCreate/>}></Route>
              <Route path="dashboard/work" element={<DashWork/>}></Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
