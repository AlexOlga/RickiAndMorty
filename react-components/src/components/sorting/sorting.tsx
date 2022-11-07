import React from 'react';
//import { useAppContext } from '../../reducer';
import { useDispatch, useSelector } from 'react-redux';
import { setTypeSorting } from '../../redux/actions';
import { TGlobalState } from '../../types';

const Sort = () => {
  //const { state, dispatch } = useAppContext();
  const dispatch = useDispatch();
  const typeSorting = useSelector((state: TGlobalState) => state.search.typeSorting);
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //dispatch({ type: 'type-sorting', payload: { typeSorting: e.target.value } });
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
