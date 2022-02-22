import React, { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    const getCocktail = async () => {
      setLoading(true);

      try {
        const resp = await fetch(`${url}${id}`);
        const data = await resp.json();

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: alcohol,
            strCategory: cat,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            image,
            alcohol,
            cat,
            glass,
            instructions,
            ingredients,
          };

          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }

        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };

    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
        <h2 className="section-title">Cocktail Focus: The {cocktail.name}</h2>
        <div className="drink">
          <img src={cocktail.image} alt={cocktail.name} />
          <div className="drink-info">
            <p>
              <span className="drink-data">name:</span>
              {cocktail.name}
            </p>

            <p>
              <span className="drink-data">category: </span>
              {cocktail.cat}, {cocktail.alcohol}
            </p>

            <p>
              <span className="drink-data">glass Type: </span>
              {cocktail.glass}
            </p>

            <p>
              <span className="drink-data">ingredients: </span>
              {cocktail.ingredients.map((item, index) => {
                return item ? <span key={index}>{item}, </span> : null
              })}
            </p>

            <p>
              <span className="drink-data">instructions: </span>
              {cocktail.instructions}
            </p>
          </div>
        </div>
      </section>
    );
  }
};
