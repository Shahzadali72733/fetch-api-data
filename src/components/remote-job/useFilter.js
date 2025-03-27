import { useState, useEffect } from 'react';

const useFilters = (jobs) => {
  const [selectedFilters, setSelectedFilters] = useState({
    employmentTypes: [],
    locations: [],
    categories: [],
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prevState) => {
      const newFilters = { ...prevState };
      if (newFilters[filterType].includes(value)) {
        newFilters[filterType] = newFilters[filterType].filter(item => item !== value);
      } else {
        newFilters[filterType].push(value);
      }
      return newFilters;
    });
  };

  const filterJobs = () => {
    let filtered = jobs;

    if (selectedFilters.employmentTypes.length > 0) {
      filtered = filtered.filter(job =>
        selectedFilters.employmentTypes.includes(job.job_type)
      );
    }

    if (selectedFilters.categories.length > 0) {
      filtered = filtered.filter(job =>
        selectedFilters.categories.includes(job.category)
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.candidate_required_location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredJobs(filtered);
  };

  useEffect(() => {
    if (jobs.length > 0) {
      filterJobs();
    }
  }, [selectedFilters, searchQuery, jobs]);

  useEffect(() => {
    if (jobs.length > 0) {
      setFilteredJobs(jobs); 
    }
  }, [jobs]);

  return { selectedFilters, filteredJobs, searchQuery, handleFilterChange, setSearchQuery };
};

export default useFilters;
