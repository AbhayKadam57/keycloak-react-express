import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const Protected = ({ token }) => {
  const isRun = useRef(false);
  const [data, setData] = useState([]);

  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;

    const getDocuments = async () => {
      try {
        const response = await axios.get("/documents", config);

        console.log(response.data);
        setData(response.data);
      } catch (e) {
        console.error(e);
      }
    };

    getDocuments();
  }, []);

  return (
    <div>
      {data ? (
        <>
          <ul>
            <li>Username:{data.name}</li>
            {data.userData?.map((ele, index) => (
              <li key={index}>{ele}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>No Data found</p>
      )}
    </div>
  );
};

export default Protected;
