import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../App";

export async function deleteTemplate(collection, id, done) {
  await deleteDoc(doc(db, collection, id));

  for (let i = 0; i < done.length; i++) {
    if (done[i].done.idTemplate == id) {
      await deleteDoc(doc(db, "done", done[i].id));
    }
  }
}
