import React from 'react';

function Filter({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search Record"
      />
    </div>
  );
}

export default Filter;
