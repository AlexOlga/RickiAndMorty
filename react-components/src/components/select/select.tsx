import React from 'react';
import { TActionReducer, TGlobalState } from '../../types';
import { connect } from 'react-redux';
import { changeOut } from '../../redux/actions';

type selectProps = {
  out: number;
  changeOut: (out: number) => TActionReducer;
};

const Select = (props: selectProps) => {
  const { out, changeOut } = props;
  const handleOutChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newOut = Number(e.target.value);
    changeOut(newOut);
  };

  return (
    <div>
      <label>Output by </label>
      <select name="out" onChange={handleOutChange} value={out ? out : ''}>
        <option> </option>
        <option>10</option>
        <option>20</option>
      </select>
    </div>
  );
};
const mapStateToProps = (state: TGlobalState) => {
  return {
    out: state.search.out,
  };
};
export default connect(mapStateToProps, { changeOut })(Select);
