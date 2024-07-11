import React, { useEffect, useState } from 'react';

function Imgcarousel() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/Data.json')
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <img src={item.image} alt={item.title} />
        </div>
      ))}
    </div>
    </>
  )
}

export default Imgcarousel
