import { useState } from "react";

function Input() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const handlerSent = async () => {
    try {
      const response = await fetch(`${serverUrl}`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ originalUrl: text }),
      });

      const data = await response.json();
      setMessage(data.url);
    } catch (err) {
      console.error("Error – ", err);
      setMessage("Извините, не удалось связаться с сервером 500 ");
    }
  };

  return (
    <div>
      <input
        style={{ width: "200px", padding: "20px", margin: "20px" }}
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder={`Введите ссылку для сокращения...`}
      />
      <button onClick={handlerSent}>
        <b>Отправить</b>
      </button>
      {message && (
        <div style={{ marginTop: "15px", color: "black" }}>
          <strong>Ответ от сервера: </strong>
          {message}
        </div>
      )}
    </div>
  );
}

export default Input;
