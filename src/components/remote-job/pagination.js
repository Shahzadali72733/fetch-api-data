import React from 'react';


const Pagination = ({ currentPage, totalPages, onPageChange, onNext, onPrevious }) => {
  const renderPageNumbers = () => {
    const visiblePages = [];
    const pageRange = 3; 

    let startPage = Math.max(1, currentPage - pageRange);
    let endPage = Math.min(totalPages, currentPage + pageRange);

    if (startPage > 1) visiblePages.push('...');

    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }

    if (endPage < totalPages) visiblePages.push('...');

    return visiblePages.map((page, index) => (
      page === '...' ? (
        <span key={index} className="pagination-ellipsis mx-2">...</span>
      ) : (
        <button
          key={index}
          className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      )
    ));
  };

  return (
    <div className="pagination-container d-flex justify-content-center py-3">
      <button
        className="btn btn-primary me-2"
        onClick={onPrevious}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      
      {/* Page Numbers */}
      {renderPageNumbers()}

      <button
        className="btn btn-primary ms-2"
        onClick={onNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
