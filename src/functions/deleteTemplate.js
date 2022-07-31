import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../App";

export async function deleteTemplate(collection, id) {
  console.log("collection", collection, "id", id);
  await deleteDoc(doc(db, collection, id));
}
