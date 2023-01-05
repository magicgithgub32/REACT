import "./App.css";
import { Route, Routes } from "react-router-dom";

import { FreeLayout } from "./layouts/FreeLayout";
import { ProtectedLayout } from "./layouts/ProtectedLayout";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Profile } from "./pages/Profile";
import { Setting } from "./pages/Setting";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<FreeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/dashboard" element={<ProtectedLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
