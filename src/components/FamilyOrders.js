import { Accordion, ProgressBar, Container } from "react-bootstrap";

import OrdersTable from "./OrdersTable";
import { STARTING_BALANCES } from "../data/constants";

import frongIcon from "../assets/user-icons/icons8-prawn-100.png";
import fretzIcon from "../assets/user-icons/icons8-crab-100.png";
import frehnartIcon from "../assets/user-icons/icons8-fish-100.png";
import sinclongIcon from "../assets/user-icons/icons8-octopus-100.png";

const iconTable = {
  Frong: frongIcon,
  Fretz: fretzIcon,
  Frehnart: frehnartIcon,
  Sinclong: sinclongIcon,
};

const FamilyOrders = ({ family, balance, purchases, setError }) => {
  let percentBalanceRemaining = Math.round((balance / STARTING_BALANCES[family]) * 100);
  if (percentBalanceRemaining < 0) {
    percentBalanceRemaining = 0;
  }

  return (
    <Accordion.Item eventKey={family}>
      <Accordion.Header>
        <Container className="d-flex align-items-center custom-inner-accordian-padding-mobile">
          <div className=" d-flex flex-column align-items-center justify-content-center custom-user-icon-margin">
            <img src={iconTable[family]} className="custom-user-icon " />
            <p className="mb-0 custom-text-mobile">{family}</p>
          </div>
          <div className="w-100">
            <div className="d-flex justify-content-between custom-family-balance-margin">
              <p className="mb-0 custom-text-mobile">
                <span className="custom-hidden-mobile">Remaining: </span>
                <span>${balance.toFixed(2)}</span>
              </p>
              <p className="mb-0 custom-hidden-mobile">{`Initial: $${STARTING_BALANCES[family].toFixed(2)}`}</p>
            </div>
            <ProgressBar
              variant={percentBalanceRemaining > 50 ? "success" : percentBalanceRemaining > 25 ? "warning" : "danger"}
              now={percentBalanceRemaining}
              label={`${percentBalanceRemaining}%`}
            />
          </div>
        </Container>
      </Accordion.Header>

      <Accordion.Body>
        <OrdersTable purchases={purchases} family={family} displayAll={false} striped={false} setError={setError} />
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default FamilyOrders;
