import css from './SearchBox.module.css';

import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';

export default function SearchBox() {
  const searchInputId = useId();
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  return (
    <div className={css.wrapper}>
      <label htmlFor={searchInputId}>Find contacts by name</label>
      <input
        className={css.field}
        type="text"
        name="searchName"
        value={filter}
        id={searchInputId}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </div>
  );
}