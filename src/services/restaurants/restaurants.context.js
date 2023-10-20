import React, { useState, createContext, useEffect, useMemo } from "react";
import { restuarantTransform, restaurantsRequest } from "./restaurants.service";

export const RestuarantsContext = createContext();
export const RestuarantsContextProvider = ({ children }) => {
  const [restuarants, setRestuarants] = useState([]);
  const [isLoading, setIsLoding] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestuarants = () => {
    setIsLoding(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restuarantTransform)
        .then((results) => {
          setRestuarants(results);
        }).catch((error)=>{
            setError(error)
        })
    }, 2000);
  };

  useEffect(() => {
    retrieveRestuarants();
  }, []);

  return (
    <RestuarantsContext.Provider
      value={{
        restuarants,
        isLoading,
        error
      }}
    >
      {children}
    </RestuarantsContext.Provider>
  );
};
