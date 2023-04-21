import './App.css';
import { useTelegram } from "./hooks/useTelegram";

function App() {
  const { user } = useTelegram();

  return (
    <div className="App">
      <header className="App-header">
        <span className={'username'}>
          {user?.username}
        </span>
      </header>
    </div>
  );
}

export default App;
