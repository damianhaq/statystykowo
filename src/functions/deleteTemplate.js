import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../App";

export async function deleteTemplate(collection, id) {
  await deleteDoc(doc(db, collection, id));
}
