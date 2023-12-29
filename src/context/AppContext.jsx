import { useContext, createContext, useState } from "react";
// import { nanoid } from "nanoid";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [playerA, setPlayerA] = useState(null);
  const [playerB, setPlayerB] = useState(null);
  const [games, setGames] = useState([]);
  const [points, setPoints] = useState({ A: 0, B: 0 });
  const [over, setOver] = useState(false);
  //   const [session, setSession] = useState(nanoid(10));
  //   const mq = useRef(null);

  const reset = () => {
    setGames([]);
    setPoints({ A: 0, B: 0 });
    setOver(false);
  };

  return (
    <AppContext.Provider
      value={{
        playerA,
        setPlayerA,
        playerB,
        setPlayerB,
        games,
        setGames,
        points,
        setPoints,
        over,
        setOver,
        reset,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useApp = () => {
  return useContext(AppContext);
};
