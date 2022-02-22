import React, { useContext, useEffect, useCallback, useState } from "react";

export const AppContext = React.createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const AppProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [term, setTerm] = useState(" ");
  const [cocktail, setCocktail] = useState([]);


  const getDrinks = useCallback( async() => {
    setLoading(true);

    try {
      const response = await fetch(`${url}${term}`);
      const data = await response.json();

      if (data.drinks) {
        const newDrinks = data.drinks.map(item => {
          return {
            id: item.idDrink,
            name: item.strDrink,
            image: item.strDrinkThumb,
            alcohol: item.strAlcoholic,
            glass: item.strGlass
          };
        });

        setCocktail(newDrinks);
      } else {
        setCocktail([]);
      }

      setLoading(false);
    }
    catch(e) {
      console.log(e);
      setLoading(false);
    }
  }, [term]);

  useEffect(() => { getDrinks() },[getDrinks, term])

  return (
    <AppContext.Provider
      value={{
        loading,
        cocktail,
        setTerm
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
