import React from 'react';
import { useAppContext } from '../../reducer';
import { connect } from 'react-redux';
import './pagination.css';

type PaginationProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  lastPage: number;
  count: number;
};
const Pagination = (prop: PaginationProps) => {
  const { state } = useAppContext();
  //  console.log('page pagi', state.page);
  // const last = state.out === 20 ? state.lastPage : Math.ceil(Number(state.count) / 10);
  const last = state.out === 20 ? prop.lastPage : Math.ceil(Number(prop.count) / 10);
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
const mapStateToProps = (state) => {
  return {
    lastPage: state.search.lastPage,
    count: state.search.count,
  };
};
export default connect(mapStateToProps, null)(Pagination);
