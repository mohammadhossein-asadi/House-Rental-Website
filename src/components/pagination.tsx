'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  function getPages(): (number | 'ellipsis')[] {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | 'ellipsis')[] = [];

    if (currentPage <= 3) {
      pages.push(1, 2, 3, 'ellipsis', totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, 'ellipsis', totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, 'ellipsis', currentPage, 'ellipsis', totalPages);
    }

    return pages;
  }

  const pages = getPages();

  return (
    <div className="flex items-center justify-center gap-2 my-10">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-muted dark:hover:bg-surface-dark-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-text dark:text-text-dark"
        aria-label="Previous page"
      >
        <ChevronLeft size={18} />
      </button>

      {pages.map((page, i) =>
        page === 'ellipsis' ? (
          <span key={`ellipsis-${i}`} className="w-10 h-10 flex items-center justify-center text-text-subtle dark:text-text-dark-subtle">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
              currentPage === page
                ? 'bg-text dark:bg-text-dark text-white'
                : 'text-text dark:text-text-dark hover:bg-surface-muted dark:hover:bg-surface-dark-muted'
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-muted dark:hover:bg-surface-dark-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-text dark:text-text-dark"
        aria-label="Next page"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
