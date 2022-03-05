import "./App.css";
import { Navbar, Sidebar, Articles } from "./components/index.js";

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Sidebar />
        <Articles />
      </div>
    </div>
  );
}

export default App;
