import { doc, updateDoc } from "firebase/firestore";
import { db } from "../App";

export async function editDocument(collection, id, data) {
  const docRef = doc(db, collection, id);
  await updateDoc(docRef, data);
}
