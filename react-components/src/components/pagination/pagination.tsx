import React from 'react';
import { useAppContext } from '../../reducer';
import './pagination.css';

type PaginationProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const Pagination = (prop: PaginationProps) => {
  const { state } = useAppContext();
  return (
    <div className="paginationWrapper">
      {state.page !== 1 && (
        <button onClick={prop.onClick} data-name="prev">
          {'<<'}
        </button>
      )}
      <button onClick={prop.onClick} className={'active'}>
        {state.page}
      </button>
      {state.page !== state.lastPage && (
        <button onClick={prop.onClick} data-name="next">
          {'>>'}
        </button>
      )}
    </div>
  );
};
export default Pagination;
