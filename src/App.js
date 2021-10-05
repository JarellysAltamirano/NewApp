//import logo from './logo.svg';
//import './App.css';
import { MostrarAlerta } from "./components/Alerts";
import { Avatar } from "./components/Avatar";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MostrarAlerta altura="30px" ancho= "820px" fontColor="#b3c8ba " texto= "Success Alert"></MostrarAlerta>
        <MostrarAlerta altura="30px" ancho= "820px" fontColor="#9affff " texto= "Default Alert"></MostrarAlerta>
        <Avatar

imagen="100%"

altura="128px"
ancho ="128px"
></Avatar>
      </header>
    </div>
  );
}

export default App;
