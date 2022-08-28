import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../App";

export async function deleteDone(id) {
  await deleteDoc(doc(db, "done", id));
}
