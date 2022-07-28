import { Routes, Route } from "react-router-dom";

import "./App.css";
import SignIn from "./components/SignIn";
import DashBoard from "./components/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <DashBoard />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
