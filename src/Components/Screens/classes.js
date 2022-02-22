import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Classes() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/classes/getAll").then((res) => {
      console.log(res.data);

      setClasses(res.data);
    });
  }, []);

  return (
    <div>
      <h2>
        {classes.map((c) => (
          <div>{c.name}</div>
        ))}
      </h2>

      <button>Add Class</button>
    </div>
  );
}

export default Classes;
