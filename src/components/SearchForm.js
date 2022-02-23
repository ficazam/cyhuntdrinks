import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";


export const SearchForm = () => {
  const { setTerm } = useGlobalContext();
  const searchVal = useRef("");

  useEffect(() => {
    searchVal.current.value = "";
    searchVal.current.focus();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    searchVal.current.value = "";
    setTerm('');
  };

  const searchCocktail = () => {
    setTerm(searchVal.current.value);
  };

  const eraser = (e) => {
    setTerm('');
    searchVal.current.value = '';
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="name">search for your favourite cocktail!</label>
          <input
            id="name"
            type="text"
            autoComplete="off"
            ref={searchVal}
            onChange={searchCocktail}
            onBlur={eraser}
          />
        </div>
      </form>
    </section>
  );
};
