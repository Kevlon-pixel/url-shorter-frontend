import Input from "./components/Input";
import LastUrls from "./components/LastUrls";
import "./styles/App.css";

function App() {
  return (
    <div className="app-container">
      <h1>Сократитель ссылок</h1>
      <Input />
      <LastUrls />
    </div>
  );
}

export default App;
