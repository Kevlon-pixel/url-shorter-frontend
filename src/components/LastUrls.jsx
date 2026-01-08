import { useLastUrls } from "../hooks/useLastUrls";
import { useEffect } from "react";
import "../styles/LastUrls.css";

function LastUrls() {
  const { lastUrls, result, error } = useLastUrls();

  useEffect(() => {
    lastUrls();
  }, [lastUrls]);

  if (error) return <p className="last-urls__error">{error}</p>;
  if (!result.length)
    return (
      <p className="last-urls__empty">
        История <b>пуста</b> стань тем кто ее начнет!
      </p>
    );

  return (
    <div className="last-urls">
      <h2>История сокращенных ссылок</h2>
      <ul className="last-urls__list">
        {result.map((item) => {
          return (
            <li key={item.shortUrl} className="last-urls__item">
              <span className="last-urls__original">{item.originalUrl}</span>{" "}
              <span className="last-urls__separator">→</span>
              <span className="last-urls__short">{item.shortUrl}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LastUrls;
