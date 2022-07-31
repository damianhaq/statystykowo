import "./App.css";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, onSnapshot } from "firebase/firestore";
import "./globalStyles.css";
import InputPanel from "./components/inputPanel/InputPanel";
import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from "react";
import Stats from "./components/stats/Stats";
import Templates from "./components/templates/Templates";
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
  const [nav, setNav] = useState(1);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    realtimeUpdate();
  }, []);

  function realtimeUpdate() {
    const q = query(collection(db, "event"));
    onSnapshot(q, (querySnapshot) => {
      const events = [];
      querySnapshot.forEach((doc) => {
        events.push({ id: doc.id, event: doc.data() });
      });
      console.log("events (fetchData)", events);
      setEvents(events);
    });
  }

  function changeNav(num) {
    setNav(num);
  }

  function Route() {
    switch (nav) {
      case 1:
        return <Stats />;
      case 2:
        return <InputPanel />;
      case 3:
        return <Templates events={events} />;
      default:
        <Stats />;
    }
  }

  return (
    <div className="app">
      <Navbar nav={nav} changeNav={changeNav} />
      <Route />
    </div>
  );
}

export default App;
