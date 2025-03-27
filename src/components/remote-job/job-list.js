import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './css/style-job-portal.css';
import useFilters from "./useFilter";
import Pagination from "./pagination";
import { useNavigate } from "react-router-dom";


const JobsListing = () => {
  const navigate = useNavigate(); 

  const handlejobapply = () => {
    navigate('/apply');
  }
  const handleRedirect = () => {
    navigate("/job-description"); 
  };

  const handleReadMore = (jobId) => {
    navigate(`/job-description/${jobId}`); 
  };


  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;
  const [employmentTypes, setEmploymentTypes] = useState([]);
  const [locations, setLocations] = useState([]);
  const [categories, setCategories] = useState([]);
  const { selectedFilters, filteredJobs, searchQuery, handleFilterChange, setSearchQuery } = useFilters(jobs);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://remotive.com/api/remote-jobs');
        const data = await response.json();
        const jobList = data.jobs;
        setJobs(jobList);

        const employmentTypes = [...new Set(jobList.map(job => job.job_type))];  //setting new array element 
        const locations = [...new Set(jobList.map(job => job.candidate_required_location))];
        const categories = [...new Set(jobList.map(job => job.category))];

        setEmploymentTypes(employmentTypes);
        setLocations(locations);
        setCategories(categories);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

   // extract the paragraph without extra tags
   const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || doc.body.innerText || '';
  };

  // limit the job detail paragraph 
  const truncateText = (text, length = 90) => {
    if (text.length > length) {
      return text.slice(0, length) + '...';
    }
    return text;
  };

  // Format the date 
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // ===========================
  // Pagination logic
  // ===========================
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageNumberClick = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <>
      <div className="container-xl flex pt-5 text-center">
        <h1 className="text-primary">Featured Jobs</h1>
        <p>Freshly Released Job Applications</p>
      </div>
      <div className="d-flex justify-content-center p-5">
        <input
          className="rounded-pill border border-primary filter-search"
          type="text"
          placeholder="Find Your Dream Job"
          style={{ width: "600px", height: "40px", padding: "20px" }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="container-xl d-flex gap-4 p-3">
        <div className="col-4 filter-section border border-grey p-3 rounded">
          <div className="filter-item">
            <h4 className="filter-title align-items-center p-2">Search By Job Type</h4>
            {employmentTypes.map((type, index) => (
              <div key={index}>
                <label className="filter-label">
                  <input
                    type="checkbox"
                    value={type}
                    checked={selectedFilters.employmentTypes.includes(type)}
                    onChange={() => handleFilterChange('employmentTypes', type)}
                  />
                  {type}
                </label>
              </div>
            ))}
          </div>

          <div className="filter-item">
            <h4 className="filter-title p-2">Search By Job Tittle</h4>
            {categories.map((category, index) => (
              <div key={index}>
                <label className="filter-label">
                  <input
                    type="checkbox"
                    value={category}
                    checked={selectedFilters.categories.includes(category)}
                    onChange={() => handleFilterChange('categories', category)}
                  />
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="col-8">
          {loading ? (
            <p>Loading jobs...</p>
          ) : (
            <div>
              {currentJobs.length === 0 ? (
                <p>No jobs available.</p>
              ) : (
                <div className="row">
                  {currentJobs.map((job, index) => (
                    <div key={index} className="col-6 mb-4">
                      <div className="job-item border p-3 rounded">
                        <h5 className="text-primary">{job.title}</h5>
                        <p><strong>Company:</strong> {job.company_name}</p>
                        <p><strong>Category:</strong> {job.category}</p>
                        <div className="d-flex gap-3 pb-2">
                          <div className="border rounded-pill bg-light text-primary sec-loc">
                            {job.candidate_required_location.split(',')[0]}
                          </div>
                          <div className="border rounded-pill bg-light text-primary fs-6 sec-type">
                            {job.job_type}
                          </div>
                        </div>
                        <p>Last Date: {formatDate(job.publication_date)}</p>
                        <p><strong>Description:</strong> {truncateText(stripHtml(job.description))}</p>
                         <div className="d-flex gap-5">
                         <button
                          className="btn btn-link btn-read-more bg-primary text-white bw-bold text-decoration-none" onClick={handlejobapply}
                        >
                          Apply Now
                        </button>
                        <button
                          className="btn btn-link btn-read-more text-decoration-none fw-600"
                          onClick={() => handleReadMore(job.id)} 
                        >
                          Read More
                        </button>
                          </div>
                       
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

     <div className="d-flex justify-content-end container-lg">
         {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageNumberClick}
        onNext={handleNextPage}
        onPrevious={handlePreviousPage}
      />
     </div>
     
    </>
  );
};

export default JobsListing;
