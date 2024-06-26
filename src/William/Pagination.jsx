import React from "react";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPaginationNumbers = () => {
    const pagesToShow = [];
    const totalPagesToShow = Math.min(totalPages, 5); // Menampilkan maksimal 5 halaman

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pagesToShow.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pagesToShow.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPagesToShow; i >= totalPagesToShow - 4; i--) {
          pagesToShow.unshift(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pagesToShow.push(i);
        }
      }
    }

    return pagesToShow.map((pageNumber) => (
      <button
        key={pageNumber}
        onClick={() => onPageChange(pageNumber)}
        className={`inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium ${
          currentPage === pageNumber ? "text-blue-500 border-indigo-500" : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
        }`}
      >
        {pageNumber}
      </button>
    ));
  };

  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-4 mb-9"> {/* Tambahkan margin top di sini */}
      <div className="-mt-px flex w-0 flex-1">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className={`inline-flex items-center border-t-2 border-transparent pl-11 pt-4 text-sm font-medium ${currentPage === 1 ? "text-gray-400" : "text-gray-500 hover:border-gray-300 hover:text-gray-700"}`}
        >
          <ArrowLongLeftIcon className="mr-3 h-5 w-5" aria-hidden="true" />
          Previous
        </button>
      </div>
      <div className="hidden md:-mt-px md:flex">
        {renderPaginationNumbers()}
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className={`inline-flex items-center border-t-2 border-transparent pr-11 pt-4 text-sm font-medium ${currentPage === totalPages ? "text-gray-400" : "text-gray-500 hover:border-gray-300 hover:text-gray-700"}`}
        >
          Next
          <ArrowLongRightIcon className="ml-3 h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
