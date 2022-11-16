import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import './pagination.css';

type PaginationProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const Pagination = (props: PaginationProps) => {
  const out = useAppSelector((state) => state.search.out);
  const count = useAppSelector((state) => state.search.count);
  const page = useAppSelector((state) => state.search.page);
  const lastPage = useAppSelector((state) => state.search.lastPage);
  const last = out === 20 ? lastPage : Math.ceil(Number(count) / 10);
  return (
    <div className="paginationWrapper">
      {page !== 1 && (
        <button onClick={props.onClick} data-name="prev">
          {'<<'}
        </button>
      )}
      <button onClick={props.onClick} className={'active'}>
        {`${page} / ${last}`}
      </button>
      {page !== last && (
        <button onClick={props.onClick} data-name="next">
          {'>>'}
        </button>
      )}
    </div>
  );
};

export default Pagination;
