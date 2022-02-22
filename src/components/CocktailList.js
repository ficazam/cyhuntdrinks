import React from "react";
import { Cocktail } from "./Cocktail";
import { Loading } from "./Loading";
import { useGlobalContext } from "../context";

export const CocktailList = () => {
  const { loading, cocktail } = useGlobalContext();

  const cocktailMapper = (
      cocktail.map(item => {
          return(
              <Cocktail key={item.id} {...item} />
          )
      })
  )

  if (loading) {
    return <Loading />;
  }

  if (cocktail.length < 1) {
    return <h2 className="section-title">No cocktails match that criteria.</h2>;
  }

  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
          {cocktailMapper}
      </div>
    </section>
  );
};
