import './Pagination.css';
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    console.log(totalPages)
    const pages = [...Array(totalPages).keys()].map(num => num + 1);
    return (
      <div style={{marginLeft:'45%'}}>
        {pages.map(page => (
          <button
          className={page === currentPage? 'disabled':'button'}
            key={page}
            onClick={() => onPageChange(page)}
            disabled={page === currentPage}
          >
            {page}
          </button>
        ))}
      </div>
    );
  };
  export default Pagination;