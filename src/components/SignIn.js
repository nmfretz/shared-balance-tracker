import { Container, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";
import skipperLogo from "../assets/logo-black.png";
import googleLogoTrans from "../assets/google-logo-transparent.png";

const SignIn = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleLogin() {
    await login();
    navigate("/");
  }

  return (
    <>
      <Container
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "100vh", maxWidth: "400px" }}
      >
        <Card>
          <Card.Body>
            <h2 className="text-center">Skipper Otto</h2>
            <p className="text-center">Share tracking</p>
            <img src={skipperLogo} className="img-fluid pb-4" />
            <Button
              variant="outline-secondary"
              size="lg"
              className="w-100 d-flex justify-content-center align-items-center"
              onClick={handleLogin}
            >
              <img src={googleLogoTrans} height="50" className="pe-3" />
              Sign in with Google
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default SignIn;
