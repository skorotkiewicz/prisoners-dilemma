import { useApp } from "../context/AppContext";
import { nanoid } from "nanoid";

const OnlineForm = ({ numRounds, setGameMode, setNumRounds }) => {
  const { setSession, setPlayerID } = useApp();

  const createGame = () => {
    const id = `${nanoid(5)}ID${numRounds}`;
    alert(`Session ID: ${id}`);
    setSession(id);
    setGameMode("2");
    setPlayerID("A");
  };

  const joinGame = () => {
    const inputSession = prompt("Enter the Session ID to join the game:");
    if (inputSession) {
      const match = inputSession.match(/ID(\d+)/);
      if (match && match[1]) {
        setNumRounds(parseInt(match[1], 10));
      }

      setSession(inputSession);
      setGameMode("2");
      setPlayerID("B");
    }
  };

  return (
    <form className="onlineForm">
      <label>
        Join existing game:
        <input type="radio" value="join" onChange={joinGame} />
      </label>

      <label>
        Create new game:
        <input type="radio" value="create" onChange={createGame} />
      </label>
    </form>
  );
};

export default OnlineForm;
