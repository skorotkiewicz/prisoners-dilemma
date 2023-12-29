import { useApp } from "../context/AppContext";
import { nanoid } from "nanoid";

const OnlineForm = ({ setGameMode }) => {
  const { setSession, setPlayerID } = useApp();

  const createGame = () => {
    const id = nanoid(10);
    alert(`Session ID: ${id}`);
    setSession(id);
    setGameMode("2");
    setPlayerID("A");
  };

  const joinGame = () => {
    const inputSession = prompt("Enter the Session ID to join the game:");
    if (inputSession) {
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
