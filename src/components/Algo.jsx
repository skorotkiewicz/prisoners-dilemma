/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useApp } from "../context/AppContext";
import mqtt from "mqtt";

const Algo = ({ gameMode }) => {
  const { mq, session, setPlayerA, setPlayerB } = useApp();

  useEffect(() => {
    if (gameMode !== "2") return;

    mq.current = mqtt.connect("wss://test.mosquitto.org:8081");

    mq.current.on("connect", () => {
      mq.current.subscribe(`/!/dilemma/${session}/A/`);
      mq.current.subscribe(`/!/dilemma/${session}/B/`);
    });

    mq.current.on("message", (topic, message) => {
      const msg = message.toString();
      const currentPlayer = topic.endsWith("A/") ? "A" : "B";

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
