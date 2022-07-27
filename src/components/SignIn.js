import { Container, Button, Card } from "react-bootstrap";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "../lib/firebase-config";
import skipperLogo from "../assets/logo-black.png";
import googleLogoTrans from "../assets/google-logo-transparent.png";

const SignIn = () => {
  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });
    signInWithPopup(auth, provider);
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
              onClick={signInWithGoogle}
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
