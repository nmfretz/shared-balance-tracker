import { collection, doc, addDoc, deleteDoc, updateDoc, Timestamp } from "firebase/firestore";
import { database } from "../lib/firebase-config";
import { collectionName } from "../data/constants";

// Error catching for these functions are in other handler functions.

export async function deleteOrder(orderId) {
  await deleteDoc(doc(database, collectionName, orderId));
  console.log(`deleted order ${orderId}`);
}

export async function addOrder(date, family, cost, description) {
  const orderRef = await addDoc(collection(database, collectionName), {
    date: Timestamp.fromDate(new Date(date)),
    family: family,
    cost: parseFloat(cost),
    description: description,
  });
  console.log("Document written with ID: ", orderRef.id);
}

export async function editOrder(orderId, date, family, cost, description) {
  const orderRef = doc(database, collectionName, orderId);

  await updateDoc(orderRef, {
    date: Timestamp.fromDate(new Date(date)),
    family: family,
    cost: parseFloat(cost),
    description: description,
  });
  console.log("Document edited with ID: ", orderRef.id);
}
