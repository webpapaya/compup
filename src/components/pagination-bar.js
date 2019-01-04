import React from 'react';
import PropTypes from 'prop-types';
import styles from './pagination-bar.css';
import className from '../lib/class-name';

const Component = ({ 
 onPageClick,
 pageCount,
 currentPage,
}) => {
  const pageArray = Array.from({ length: pageCount - 1 }).map((_, index) => index);
  
  return (
    <div className={className(styles.wrapper)}>
      <ul className={className(styles.list) }>
        { currentPage > 0 && (
          <li 
            className={className(styles.item) }
            onClick={() => onPageClick(currentPage - 1) }
          >
            {'<'}
          </li>
        ) }
        
        { pageArray.map((pageNumber) => (
          <li 
            onClick={() => onPageClick(pageNumber) }
            className={className(styles.item, currentPage === pageNumber && styles.active) } 
            key={pageNumber}
          >
            {pageNumber}
          </li>
        )) }

        { currentPage < pageCount - 1 && (
          <li 
            className={className(styles.item) }
            onClick={() => onPageClick(currentPage + 1) }
          >
            {'>'}
          </li>
        ) }
      </ul>
    </div>
    
  );
}

Component.propTypes = {
  onPageClick: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Component;