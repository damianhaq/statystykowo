import { collection, getDocs } from "firebase/firestore";
import { db } from "../App";

export async function fetchData() {
  let temp = [];
  const querySnapshot = await getDocs(collection(db, "event"));
  querySnapshot.forEach((doc) => {
    const test = doc.data();
    temp = [...temp, { id: doc.id, value: test }];
  });
  // return promise
  return temp;
}
