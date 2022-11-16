import React from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { changeOut } from '../../redux/searchSlice';

const Select = () => {
  const out = useAppSelector((state) => state.search.out);
  const dispatch = useAppDispatch();
  const handleOutChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newOut = Number(e.target.value);
    dispatch(changeOut(newOut));
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

export default Select;
