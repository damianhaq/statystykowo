import { collection, addDoc } from "firebase/firestore";
import { db } from "../App";

export async function addData(data) {
  console.log("asd11111111");
  try {
    const docRef = await addDoc(collection(db, "users"), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
