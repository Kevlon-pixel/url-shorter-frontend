import { useState } from "react";
import { useUrlShorter } from "../hooks/useUrlShorter";
import "../styles/Input.css";

function Input() {
  const [text, setText] = useState("");
  const { shorterUrl, loading, error, result } = useUrlShorter(text);

  return (
    <div className="input-group">
      <div className="input-row">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Вставьте сюда ссылку"
          disabled={loading}
        />
        <button onClick={shorterUrl}>
          {loading ? "Сокращаю..." : "Сократить"}
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {result && (
        <p style={{ marginLeft: "20px" }}>
          <strong>Результат: </strong>
          {result}
        </p>
      )}
    </div>
  );
}

export default Input;
