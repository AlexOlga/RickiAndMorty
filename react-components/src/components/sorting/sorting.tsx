import React from 'react';
//import { useAppContext } from '../../reducer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setTypeSorting } from '../../redux/searchSlice';

const Sort = () => {
  //const { state, dispatch } = useAppContext();
  const dispatch = useAppDispatch();
  const typeSorting = useAppSelector((state) => state.search.typeSorting);
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTypeSorting(e.target.value));
  };

  return (
    <div>
      <label>Sort by </label>
      <select name="sort" onChange={handleStatusChange} value={typeSorting}>
        <option> </option>
        <option>from A to Z</option>
        <option>from Z to A</option>
        <option>first Alive</option>
        <option>first Dead</option>
      </select>
    </div>
  );
};
export default Sort;
