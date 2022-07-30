import { collection, addDoc } from "firebase/firestore";
import { db } from "../App";

export async function addData(data) {
  try {
    const docRef = await addDoc(collection(db, "event"), data);
    console.log("Document written with ID: ", docRef.id);
    return "Zapisano";
  } catch (e) {
    console.error("Error adding document: ", e);
    return `Bląd: ${e}`;
  }
}
