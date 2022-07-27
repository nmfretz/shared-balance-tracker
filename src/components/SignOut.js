import Button from "react-bootstrap/esm/Button";

import { auth } from "../lib/firebase-config";

const SignOut = () => {
  return (
    auth.currentUser && (
      <Button variant="outline-secondary" size="" className="w-100" onClick={() => auth.signOut()}>
        Sign Out
      </Button>
    )
  );
};

export default SignOut;
