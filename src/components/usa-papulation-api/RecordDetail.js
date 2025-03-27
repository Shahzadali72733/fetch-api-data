import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function RecordDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams(); 

  const [record, setRecord] = useState(location.state?.record);
  const [isLoading, setIsLoading] = useState(!location.state?.record);

  useEffect(() => {
    if (!record) {
      fetchRecordById(id);
    }
  }, [id, record]);

  const fetchRecordById = async (id) => {
    try {
      const response = await fetch(
        `https://datausa.io/api/data?drilldowns=Nation&measures=Population`
      );
      const result = await response.json();
      if (result && result.data) {
        const foundRecord = result.data.find((item) => item.Population === parseInt(id));
        if (foundRecord) {
          setRecord(foundRecord);
        } else {
          console.error("Record not found");
        }
      }
    } catch (error) {
      console.error("Error fetching record:", error);
    } finally {
      setIsLoading(false); 
    }
  };

  const handleBackToHome = () => {
    navigate("/api");
  };

  return (
    <div className="view-data">
      <h1>Record Details</h1>
      {isLoading ? (
        <p>Loading record...</p>
      ) : record ? (
        <>
          <p>Nation: {record.Nation}</p>
          <p>Year: {record.Year}</p>
          <p>Population: {record.Population}</p>
          <button onClick={handleBackToHome}>Back To Home</button>
        </>
      ) : (
        <p>Record not found.</p>
      )}
    </div>
  );
}

export default RecordDetail;