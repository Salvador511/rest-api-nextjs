'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcxODAzMzQ2OSwiZXhwIjoxNzE4MDM3MDY5fQ.5Uyy7Tw8W32YGmIl740EW7uK6qSdRFbVnOu7uU7seas';
      try {
        const response = await axios.get('/api/protected-route', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error('There was a problem with your axios operation:', error);
      }
    };

    fetchData();
  }, []);

  return <div>{data ? data.message : 'Loading...'}</div>;
}
