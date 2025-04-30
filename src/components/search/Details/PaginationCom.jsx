import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationCom({ searchParams, total }) {
  // Parse page from searchParams, default to 1 if missing or invalid
  const currentPage = parseInt(searchParams?.page || "1", 10);
  const totalPages = total || 10;

  // Function to create URL with preserved query params
  const createPageUrl = (pageNum) => {
    // Create a plain object from searchParams
    const params = {};

    // Copy all existing params
    if (searchParams) {
      Object.keys(searchParams).forEach((key) => {
        // Skip Symbol entries and only include string values
        if (typeof key === "string" && typeof searchParams[key] === "string") {
          params[key] = searchParams[key];
        }
      });
    }

    // Update or add page parameter
    params.page = pageNum.toString();

    // Convert to query string
    const queryString = Object.entries(params)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
      )
      .join("&");

    return `?${queryString}`;
  };

  // Calculate page range to display (always show 5 pages if possible)
  const getPageRange = () => {
    const pagesToShow = 5;

    // If we have fewer pages than the number we want to show
    if (totalPages <= pagesToShow) {
      // Show all pages from 1 to totalPages
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Calculate the range to show based on current page
    let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    let endPage = startPage + pagesToShow - 1;

    // Adjust if we're near the end
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - pagesToShow + 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    );
  };

  const pageRange = getPageRange();

  return (
    <Pagination className="mt-10">
      <PaginationContent>
        {/* Previous Button */}
        {currentPage > 1 && (
          <PaginationItem className="cursor-pointer">
            <PaginationPrevious href={createPageUrl(currentPage - 1)} />
          </PaginationItem>
        )}

        {/* Page Numbers */}
        {pageRange.map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              isActive={currentPage === pageNumber}
              href={createPageUrl(pageNumber)}
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Next Button */}
        {currentPage < totalPages && (
          <PaginationItem className="cursor-pointer">
            <PaginationNext href={createPageUrl(currentPage + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
