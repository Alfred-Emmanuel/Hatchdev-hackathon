import React from 'react';

const Pagination = ({ currentPage, totalPages, goToNextPage, goToPreviousPage, goToFirstPage, goToPage }) => {

  const getPageNumbers = () => {
    const pageNumbers = [];
    
    if (totalPages === 1) {
      return [1];
    }

    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage > 2) {
        pageNumbers.push('...');
      }
      for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
        pageNumbers.push(i);
      }
      if (currentPage < totalPages - 1) {
        pageNumbers.push('...');
      }
    }
    return pageNumbers;
  };

  return (
    <div className='border-2 rounded-md w-[90%] md:w-[25%] flex items-center h-10 cursor-pointer my-10 px-3'>
      <div className='w-1/3 flex justify-center'>
        <h1 
          className={`text-gray-400 ${currentPage === 1 ? 'opacity-50' : ''}`}
          onClick={goToFirstPage}
        >
          First
        </h1>
      </div>
      <div className='flex w-1/2 items-center justify-center gap-3 h-full border-x-2 px-2'>
        {getPageNumbers().map((pageNum, index) => (
          <h1
            key={index}
            className={`h-full flex items-center px-3 ${currentPage === pageNum ? 'bg-[#23A6F0] text-white' : ''}`}
            onClick={() => typeof pageNum === 'number' && goToPage(pageNum)}
          >
            {pageNum}
          </h1>
        ))}
      </div>
      <div className='w-1/3 flex justify-center text-[#23A6F0]'>
        <h1
          className={`${currentPage === totalPages ? 'opacity-50' : ''}`}
          onClick={goToNextPage}
        >
          Next
        </h1>
      </div>
    </div>
  );
};

export default Pagination;
