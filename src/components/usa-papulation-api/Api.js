import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/style-api.css'
import Filter from './Filter';

  function Api() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
        );
        const result = await response.json();
        if (result && result.data) 
        {
          setData(result.data);
        }
        } catch {
        <p>api fetching error</p>
        } 
    };
    fetchData();
  }, []);

  const handleGetRecord = (record) => {
    const recordId = record.Population;
    navigate(`/record/${recordId}`, { state: { record } });
  };
  
  const filteredData = data.filter( (record) =>
    record.Nation.toLowerCase().includes(searchTerm.toLowerCase()) || 
    record.Year.toString().includes(searchTerm) ||
    record.Population.toString().includes(searchTerm) 
  );

  return (
    <div className="main-container">
      <div className="filter-data">
        <h1>Yearly Population Data</h1>
        <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="data-boxes">
        {filteredData.map((record) => (
          <div className="record-style" key={record.id}>
            <h3>{record.Nation}</h3>
            <p>Year: {record.Year}</p>
            <p>Population: {record.Population}</p>
            <button  className="display-rec" onClick={() => handleGetRecord(record)} >Get Record</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Api;