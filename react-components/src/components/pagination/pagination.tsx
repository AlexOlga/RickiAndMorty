import React from 'react';
import { useAppContext } from '../../reducer';
import './pagination.css';

type PaginationProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const Pagination = (prop: PaginationProps) => {
  const { state } = useAppContext();
  const last = state.out === 20 ? state.lastPage : Math.ceil(Number(state.count) / 10);
  return (
    <div className="paginationWrapper">
      {state.page !== 1 && (
        <button onClick={prop.onClick} data-name="prev">
          {'<<'}
        </button>
      )}
      <button onClick={prop.onClick} className={'active'}>
        {`${state.page} / ${last}`}
      </button>
      {state.page !== last && (
        <button onClick={prop.onClick} data-name="next">
          {'>>'}
        </button>
      )}
    </div>
  );
};
export default Pagination;
