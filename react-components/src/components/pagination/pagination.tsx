import React from 'react';
//import { useAppContext } from '../../reducer';
import { connect } from 'react-redux';
import { TGlobalState } from '../../types';

import './pagination.css';

type PaginationProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  lastPage: number;
  count: number;
  out: number;
  page: number;
};
const Pagination = (props: PaginationProps) => {
  //const { state } = useAppContext();
  //  console.log('page pagi', state.page);
  // const last = state.out === 20 ? state.lastPage : Math.ceil(Number(state.count) / 10);
  const last = props.out === 20 ? props.lastPage : Math.ceil(Number(props.count) / 10);
  return (
    <div className="paginationWrapper">
      {props.page !== 1 && (
        <button onClick={props.onClick} data-name="prev">
          {'<<'}
        </button>
      )}
      <button onClick={props.onClick} className={'active'}>
        {`${props.page} / ${last}`}
      </button>
      {props.page !== last && (
        <button onClick={props.onClick} data-name="next">
          {'>>'}
        </button>
      )}
    </div>
  );
};
const mapStateToProps = (state: TGlobalState) => {
  return {
    lastPage: state.search.lastPage,
    count: state.search.count,
    out: state.search.out,
    page: state.search.page,
  };
};
export default connect(mapStateToProps, null)(Pagination);
