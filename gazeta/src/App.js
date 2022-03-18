import "./App.css";
import { Sidebar, Articles } from "./components/index.js";

function App() {
  return (
    <div className="content">
      <Sidebar />
      <Articles />
    </div>
  );
}

export default App;
