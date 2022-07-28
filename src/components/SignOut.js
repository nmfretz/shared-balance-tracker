import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

import { useAuth } from "../contexts/AuthContext";

const SignOut = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function signOut() {
    await logout();
    navigate("/login");
  }

  return (
    <Button variant="outline-secondary" size="" className="w-100" onClick={signOut}>
      Sign Out
    </Button>
  );
};

export default SignOut;
