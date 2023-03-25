import { useState } from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  const [theme,setTheme] = useState(1);
  const [bg,setBg] = useState(1);
  return (
    <div className="App">
      <button onClick={() => {document.getElementById("root").classList = `boardTheme${theme}`; setTheme((theme + 1)%7)}}>Board Theme</button>
      <Board/>
      <button onClick={() => {document.body.classList = `bgTheme${bg}`; setBg((bg + 1)%8)}}>Background</button>
    </div>
  );
}

export default App;
