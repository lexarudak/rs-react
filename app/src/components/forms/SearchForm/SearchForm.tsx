// import React, { useState } from 'react';
// import { setSearchValue, rickAndMortySelector } from 'store';
// import { useAppDispatch, useAppSelector } from 'hooks';
// import { TestId } from 'models';
// import style from './SearchForm.module.scss';

// const PLACEHOLDER = 'Search';

// const SearchForm = () => {
//   const dispatch = useAppDispatch();
//   const { searchValue } = useAppSelector(rickAndMortySelector);
//   const [currentValue, changeCurrentValue] = useState(searchValue);

//   const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     changeCurrentValue((...prev) => prev[0].trim());
//     dispatch(setSearchValue(currentValue));
//   };

//   const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
//     changeCurrentValue(e.target.value);

//   return (
//     <form
//       data-testid={TestId.searchForm}
//       className={style.form}
//       onSubmit={(e) => onSubmitHandler(e)}
//     >
//       <input
//         type={'text'}
//         placeholder={PLACEHOLDER}
//         className={style.input}
//         value={currentValue}
//         onChange={(e) => onChangeHandler(e)}
//       ></input>
//     </form>
//   );
// };

// export default SearchForm;
