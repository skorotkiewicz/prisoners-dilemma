/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "preact/hooks";
import { useApp } from "../context/AppContext";
import mqtt from "mqtt";

const Algo = ({ gameMode }) => {
  const { mq, session, setPlayerA, setPlayerB, setChat } = useApp();

  useEffect(() => {
    if (gameMode !== "2") return;

    mq.current = mqtt.connect("wss://test.mosquitto.org:8081");

    mq.current.on("connect", () => {
      mq.current.subscribe(`/!/dilemma/${session}/A/`);
      mq.current.subscribe(`/!/dilemma/${session}/B/`);
      mq.current.subscribe(`/!/dilemma/${session}/chat/`);
    });

    mq.current.on("message", (topic, message) => {
      const msg = message.toString();
      const currentPlayer = topic.endsWith("A/") ? "A" : "B";

      if (topic == `/!/dilemma/${session}/chat/`) {
        return setChat((prev) => [...prev, JSON.parse(message)]);
      }

      switch (currentPlayer) {
        case "A":
          setPlayerA(msg);
          break;

        case "B":
          setPlayerB(msg);
          break;
      }
    });

    return () => mq.current.end();
  }, []);
};

export default Algo;
