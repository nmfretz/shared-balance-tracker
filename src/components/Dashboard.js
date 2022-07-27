import { useState } from "react";
import { Container, Row, Col, Button, Card, Alert } from "react-bootstrap";

import MainBoard from "./MainBoard";
import RecentOrders from "./RecentOrders";

const Dashboard = ({ purchases }) => {
  const [error, setError] = useState(null);

  return (
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
          <Card className="p-4">
            <MainBoard purchases={purchases} setError={setError} />
          </Card>
        </Col>

        <Col lg={4} className="d-none d-lg-block">
          <Card>
            <RecentOrders purchases={purchases} setError={setError} />
          </Card>
        </Col>
      </Row>
      <Button
        className="mt-3 mb-5 custom-btn-color custom-skipper-btn"
        onClick={() => window.open("https://skipperotto.com/")}
      >
        Visit Skipper Otto
      </Button>
    </Container>
  );
};

export default Dashboard;
