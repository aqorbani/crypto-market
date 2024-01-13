import PropTypes from "prop-types";

const Pagination = ({ page, setPage }) => {
  Pagination.propTypes = {
    page: PropTypes.number,
    setPage: PropTypes.func,
  };
  const previousHandler = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };

  const nextHandler = () => {
    if (page >= 10) return;
    setPage((page) => page + 1);
  };

  const setPageHandler = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div className="flex justify-center items-center p-5">
      <button
        className={page == 1 ? "pagination-btn-disable" : "pagination-btn"}
        onClick={previousHandler}
      >
        previous
      </button>
      <p
        className={page == 1 ? "pagination-btn-active" : "pagination-btn"}
        onClick={() => setPageHandler(1)}
      >
        1
      </p>
      <p
        className={page == 2 ? "pagination-btn-active" : "pagination-btn"}
        onClick={() => setPageHandler(2)}
      >
        2
      </p>
      {page > 2 && page < 9 && (
        <>
          <span>...</span>
          <p className="pagination-btn-active">{page}</p>
        </>
      )}
      <span>...</span>
      <p
        className={page == 9 ? "pagination-btn-active" : "pagination-btn"}
        onClick={() => setPageHandler(9)}
      >
        9
      </p>
      <p
        className={page == 10 ? "pagination-btn-active" : "pagination-btn"}
        onClick={() => setPageHandler(10)}
      >
        10
      </p>
      <button
        className={page == 10 ? "pagination-btn-disable" : "pagination-btn"}
        onClick={nextHandler}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
