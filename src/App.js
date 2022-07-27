import { useAuthState } from "react-firebase-hooks/auth";
import { collection, query, orderBy } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

import { auth, database } from "./lib/firebase-config";
import { collectionName } from "./data/constants";
import "./App.css";

import SignIn from "./components/SignIn";
import Nav from "./components/Nav";
import DashBoard from "./components/Dashboard";

function App() {
  // TODO: refactor to a context for auth and database
  const [user, loading, error] = useAuthState(auth);

  const purchasesRef = collection(database, collectionName);
  const q = query(purchasesRef, orderBy("date"));
  const [purchasesCollection] = useCollection(q);

  return (
    <>
      {user && <Nav user={user} />}
      {user ? <DashBoard purchases={purchasesCollection} /> : <SignIn />}
    </>
  );
}

export default App;
