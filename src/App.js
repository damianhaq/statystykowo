import "./App.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import TestFirestore from "./components/TestFirestore";
import InputPanel from "./components/inputPanel/InputPanel";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIpixSPu-LOZQwo9pAxyJBbWqdEsINmkk",
  authDomain: "statystykowo.firebaseapp.com",
  projectId: "statystykowo",
  storageBucket: "statystykowo.appspot.com",
  messagingSenderId: "582351498665",
  appId: "1:582351498665:web:e52ebfe2509d475938e8b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});

function App() {
  return (
    <div className="App">
      hello world
      <TestFirestore />
      <InputPanel />
    </div>
  );
}

export default App;
