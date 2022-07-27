import { useEffect, useState } from "react";
import { Container, Accordion } from "react-bootstrap";

import FamilyOrders from "./FamilyOrders";
import OrderModal from "./OrderModal";
import { STARTING_BALANCES } from "../data/constants";

const MainBoard = ({ purchases, setError }) => {
  const [groupBalance, setGroupBalance] = useState(0);
  const [familyBalances, setFamilyBalances] = useState({});

  useEffect(() => {
    if (!purchases) return;

    // functions placed inside useEffect to avoid dependency linting warning
    function calculateGroupBalance() {
      let initialGroupBalance = Object.values(STARTING_BALANCES).reduce((sum, value) => {
        return sum + value;
      }, 0);

      const remainingGroupBalance = purchases.docs.reduce(
        (initialGroupBalance, purchase) => initialGroupBalance - purchase.data().cost,
        initialGroupBalance
      );

      return remainingGroupBalance;
    }

    function calculateFamilyBalance(user) {
      let initialBalance = STARTING_BALANCES[user];
      const remainingBalance = purchases.docs.reduce((initialBalance, purchase) => {
        const data = purchase.data();
        if (data.family === user) {
          return initialBalance - data.cost;
        } else {
          return initialBalance;
        }
      }, initialBalance);
      return remainingBalance;
    }

    setGroupBalance(calculateGroupBalance());

    const balances = {};
    Object.keys(STARTING_BALANCES).forEach((family) => {
      const balance = calculateFamilyBalance(family);
      balances[family] = balance;
    });

    setFamilyBalances({ ...balances });
  }, [purchases]);

  return (
    <>
      <Container className="d-flex justify-content-between align-items-center mb-3">
        <h3>
          <span className="custom-hidden-mobile align-middle custom-group-balance-text-size">2022 Group Balance: </span>
          <span className="align-middle custom-group-balance-text-size">${groupBalance.toFixed(2)}</span>
        </h3>
        <OrderModal setError={setError} />
      </Container>

      <Container>
        <Accordion>
          {Object.entries(familyBalances).map(([family, balance]) => {
            return (
              <FamilyOrders key={family} family={family} balance={balance} purchases={purchases} setError={setError} />
            );
          })}
        </Accordion>
      </Container>
    </>
  );
};

export default MainBoard;
