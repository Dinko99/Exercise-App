import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.scss';

const Pagination = ({
  exercises,
  currentExercises,
  setCurrentExercises,
  bodyPart,
  itemOffset,
  setItemOffset,
}) => {
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  let page;
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentExercises(exercises.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(exercises.length / itemsPerPage));
    page = endOffset / itemsPerPage;
    setCurrentPage(page);
  }, [itemOffset, itemsPerPage, exercises, bodyPart]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % exercises.length;
    setItemOffset(newOffset);

    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  return (
    <ReactPaginate
      breakLabel='...'
      nextLabel='>'
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      forcePage={currentPage - 1}
      previousLabel='<'
      renderOnZeroPageCount={null}
      containerClassName='pagination'
      activeLinkClassName='active'
      disabledLinkClassName='disabled'
    />
  );
};

export default Pagination;
