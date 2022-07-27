import { collection, getDocs } from "firebase/firestore";
import { db } from "../App";

export async function fetchData() {
  let temp = [];
  const querySnapshot = await getDocs(collection(db, "testowaKolekcja"));
  querySnapshot.forEach((doc) => {
    const test = doc.data().testowyField;
    temp = [...temp, { id: doc.id, value: test }];
  });
  // return promise
  return temp;
}
