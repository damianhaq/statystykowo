import React, { useEffect, useState } from "react";
import { fetchData } from "../functions/fetchData";

const TestFirestore = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((value) => {
      setData(value);
    });
  }, []);

  return (
    <div>
      TestFirestore
      {data.map((el) => (
        <p key={el.id}>{el.value}</p>
      ))}
    </div>
  );
};

export default TestFirestore;
