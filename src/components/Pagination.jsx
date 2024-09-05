import React from 'react';

const Pagination = ({ currentPage, totalPages, goToNextPage, goToPreviousPage, goToFirstPage, goToPage }) => {
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
        {/* Display page numbers */}
        {[...Array(totalPages).keys()].map((pageNum) => (
          <h1
            key={pageNum}
            className={`h-full flex items-center px-3 ${currentPage === pageNum + 1 ? 'bg-[#23A6F0] text-white' : ''}`}
            onClick={() => goToPage(pageNum + 1)}
          >
            {pageNum + 1}
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
