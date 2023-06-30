import "./App.css";
import BTCUSDT from "./BTCUSDT";
import ETHUSDT from "./ETHUSDT";
import XRPUSDT from "./XRPUSDT";
import BNBUSDT from "./BNBUSDT";
import ADAUSDT from "./ADAUSDT";
function App() {
  return (
    <div className="container">
      <BTCUSDT />
      <ETHUSDT />
      <XRPUSDT />
      <BNBUSDT />
      <ADAUSDT />
    </div>
  );
}

export default App;
