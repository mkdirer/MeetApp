import { createContext, useState } from "react";

const BestContext = createContext({
  bests: [],
  numberOfBest: 0,
  addBest: (bestie) => {},
  removeBest: (eventId) => {},
  elementIsBest: (eventId) => {},
});

export function BestContextProvider(props) {
  const [userBests, setUserBests] = useState([]);

  function addBestHandler(bestie) {
    setUserBests((prevBesties) => {
      return prevBesties.concat(bestie);
    });
  }

  function removeBestHandler(eventId) {
    setUserBests((prevBesties) => {
      return prevBesties.filter((bestie) => bestie.id !== eventId);
    });
  }

  function elementIsBestHandler(eventId) {
    return userBests.some((bestie) => bestie.id === eventId);
  }

  const context = {
    bests: userBests,
    numberOfBest: userBests.length,
    addBest: addBestHandler,
    removeBest: removeBestHandler,
    elementIsBest: elementIsBestHandler,
  };

  return (
    <BestContext.Provider value={context}>
      {props.children}
    </BestContext.Provider>
  );
}

export default BestContext;
