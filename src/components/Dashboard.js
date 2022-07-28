import { useState } from "react";
import { Container, Row, Col, Button, Card, Alert } from "react-bootstrap";

import { collection, query, orderBy } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

import { database } from "../lib/firebase-config";
import { collectionName } from "../data/constants";

import Nav from "./Nav";
import MainBoard from "./MainBoard";
import RecentOrders from "./RecentOrders";

const Dashboard = () => {
  const [error, setError] = useState(null);

  const purchasesRef = collection(database, collectionName);
  const q = query(purchasesRef, orderBy("date"));
  const [purchasesCollection] = useCollection(q);

  return (
    <>
      <Nav />
      <Container className="custom-dashboard-margin">
        {error && (
          <Alert variant="danger" onClose={() => setError(null)} dismissible>
            <Alert.Heading>Error! Your feesh got away!</Alert.Heading>
            <p>
              {error.name}: {error.message}
            </p>
          </Alert>
        )}
        <Row>
          <Col lg={8} md={12}>
            <Card className="custom-mainboard-padding">
              <MainBoard purchases={purchasesCollection} setError={setError} />
            </Card>
          </Col>

          <Col lg={4} className="d-none d-lg-block">
            <Card>
              <RecentOrders purchases={purchasesCollection} setError={setError} />
            </Card>
          </Col>
        </Row>
        <Button
          className="mt-3 mb-5 custom-btn-color custom-skipper-btn"
          onClick={() => window.open("https://skipper.gosoftware.co/login.php")}
        >
          Visit Skipper Otto
        </Button>
      </Container>
    </>
  );
};

export default Dashboard;
