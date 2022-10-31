import React from 'react';
import { useAppContext } from '../../reducer';

const Select = () => {
  const { state, dispatch } = useAppContext();
  const handleOutChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'out', payload: { out: Number(e.target.value) } });
  };

  return (
    <div>
      <label>Output by </label>
      <select name="out" onChange={handleOutChange} value={state.out ? state.out : ''}>
        <option> </option>
        <option>10</option>
        <option>20</option>
      </select>
    </div>
  );
};
export default Select;
