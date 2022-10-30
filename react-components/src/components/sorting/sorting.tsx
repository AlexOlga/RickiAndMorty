import React from 'react';
import { useAppContext } from '../../reducer';

const Sort = () => {
  const { state, dispatch } = useAppContext();
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'type-sorting', payload: { typeSorting: e.target.value } });
  };

  return (
    <div>
      <label>Sort by</label>
      <select
        name="sort"
        onChange={handleStatusChange}
        value={state.typeSorting ? state.typeSorting : ''}
      >
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
