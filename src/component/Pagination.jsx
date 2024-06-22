const Pagination = ({ newsPerPage, totalNews, currentPage, onPageChange }) => {
  let pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-center space-x-2">
        {pageNumber.map(number => (
          <li key={number} className={number === currentPage ? "font-bold" : ""}>
            <button onClick={() => onPageChange(number)} className="px-2 py-1 border rounded">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
