import { Table } from "react-bootstrap";

import OrderModal from "./OrderModal";
import { DATE_OPTIONS } from "../data/constants";
import DeleteModal from "./DeleteModal";

const OrdersTable = ({ purchases, family, striped, displayAll, setError }) => {
  // memoize this?
  let purchasesToDisplay = [];

  if (purchases) {
    if (displayAll) {
      purchasesToDisplay = purchases.docs;
    } else {
      purchasesToDisplay = purchases.docs.filter((purchase) => purchase.data().family === family);
    }
  }

  return (
    <Table striped={striped} className="custom-text-mobile">
      <thead>
        <tr>
          <th className="custom-date-width">Date</th>
          {displayAll && <th>Family</th>}
          <th>Cost</th>
          <th>Description</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {purchasesToDisplay.length === 0 && (
          <tr>
            <td>no purchases yet</td>
          </tr>
        )}
        {purchases &&
          purchasesToDisplay.map((purchase) => {
            const data = purchase.data();
            const date = new Date(data.date.seconds * 1000);
            const parsedDate = date.toLocaleString("en-CA", DATE_OPTIONS);
            return (
              <tr key={purchase.id} className="custom-text-mobile-smaller">
                <td className="custom-date-width">{parsedDate}</td>
                {displayAll && <td>{data.family}</td>}
                <td>${data.cost.toFixed(2)}</td>
                <td>{data.description}</td>
                <td className="custom-pointer">
                  <OrderModal orderToEdit={{ id: purchase.id, data: data }} setError={setError} />
                </td>
                <td className="custom-pointer">
                  <DeleteModal orderId={purchase.id} setError={setError} />
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default OrdersTable;
