import { Card, Table } from "react-bootstrap";

import AllOrdersModal from "./AllOrdersModal";
import { DATE_OPTIONS } from "../data/constants";

const RecentOrders = ({ purchases, setError }) => {
  return (
    <Card.Body>
      <Card.Title>Recent Orders</Card.Title>
      <Table>
        <tbody>
          {purchases &&
            purchases.docs.slice(-5).map((purchase) => {
              // show most recent 5 orders
              const data = purchase.data();
              const date = new Date(data.date.seconds * 1000);
              const parsedDate = date.toLocaleString("en-CA", DATE_OPTIONS);

              return (
                <tr key={purchase.id}>
                  <td>{data.family}</td>
                  <td>{parsedDate}</td>
                  <td>${data.cost.toFixed(2)}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <AllOrdersModal purchases={purchases} setError={setError} />
    </Card.Body>
  );
};

export default RecentOrders;
