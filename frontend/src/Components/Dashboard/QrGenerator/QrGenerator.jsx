import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from "../../../Context/AuthContext";

const AllUrls = () => {
  const { currentUser } = useAuth();
  const [urls, setUrls] = useState([]);
  
  useEffect(() => {
    console.log(currentUser.uid);
    const apiUrl = "http://localhost:5000/api/userUrl/" + currentUser.uid; 

    const fetchUrls = async () => {
      try {
        const response = await axios.get(apiUrl);
        setUrls(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching URLs:', error);
      }
    };

    fetchUrls();
  }, []);

  return (
    <div>
      <h1>All URLs</h1>
      <ul>
        {urls.map((url) => (
          <li key={url.id}>{url.shortenedUrl}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllUrls;


// import React from "react";

// const QrGenerator = () => {
//   return <div className="min-h-screen bg-black">QrGenerator</div>;
// };

// export default QrGenerator;
