import React, { useEffect, useState } from 'react';
import './index.css'

function App() {
  const [data, setData] = useState([]); 
  const [error, setError] = useState(null); 
  const [selectedRecord, setSelectedRecord] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try
      {
        const response = await fetch(
          'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
        );
        if (!response.ok)
           {
          throw new Error(`HTTP error! Status: ${response.status}`);
           }
        const result = await response.json();
        setData(result.data); 
      } 
      catch (error) {
        setError(error.message);
      } 
    };

    fetchData();
  }, []);

  const handleGetRecord = (record) => {
    setSelectedRecord(record);
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <div className='main-container'>
      <h1> Yearly Population Data</h1>
      <div className="data-boxes">
        {data.map((record , key) => (
          <div className='record-style' key={record}>
            <h3>{record.Nation}</h3>
            <p>Year: {record.Year}</p>
            <button onClick={() => handleGetRecord(record)}
             className='display-rec' >Get Record
            </button>
          </div>
        ))}
      </div>
      {
      selectedRecord && (
        <div className='view-data' >
          <h2>Selected Record Details</h2>
          <p><strong>Nation:</strong> {selectedRecord.Nation}</p>
          <p><strong>Year:</strong> {selectedRecord.Year}</p>
          <p><strong>Population:</strong> {selectedRecord.Population}</p>
        </div>
      )
      }
    </div>
  );
}

export default App;