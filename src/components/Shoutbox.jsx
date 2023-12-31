import { useState, useEffect, useRef } from "preact/hooks";
import { useApp } from "../context/AppContext";
import "../styles/Shoutbox.scss";

const Shoutbox = ({ name }) => {
  const [open, setOpen] = useState(false);
  const [unread, setUnread] = useState(0);
  const [msg, setMsg] = useState("");
  const messagesContainerRef = useRef(null);

  const { chat, mq, session } = useApp();

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }

    if (!open && chat.length > 0) setUnread((prev) => prev + 1);
  }, [chat]);

  const sendMessage = (data) => {
    if (!(data.length >= 1)) return;

    mq.current.publish(
      `/!/dilemma/${session}/chat/`,
      JSON.stringify({ date: new Date(), name, message: data })
    );
    setMsg("");
  };

  const timeParser = (date) => {
    try {
      const hour = (date.getHours() < 10 ? "0" : "") + date.getHours();
      const minute = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
      return `${hour}:${minute}`;
    } catch (_) {}
  };

  return (
    <div className="chat">
      {!open && (
        <button
          className="open"
          onClick={() => {
            setOpen(true);
            setUnread(0);
          }}
        >
          Shoutbox {unread > 0 && <span>{unread}</span>}
        </button>
      )}

      {open && (
        <div className="chat-popup">
          <div className="container">
            <h3>
              Shoutbox
              <span className="close" onClick={() => setOpen(false)}>
                X
              </span>
            </h3>

            <div ref={messagesContainerRef} className="messages">
              {chat.map((d, i) => (
                <div key={i}>
                  <span className="time">{timeParser(new Date(d.date))} |</span>{" "}
                  <span className="name">Player {d.name}:</span>{" "}
                  <span className="msg">{d.message}</span>
                </div>
              ))}
            </div>

            <div className="inputs">
              <input
                type="text"
                value={msg}
                maxLength={255}
                onChange={(e) => setMsg(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage(msg);
                  }
                }}
              />
              <button onClick={() => sendMessage(msg)}>Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shoutbox;
