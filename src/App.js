import "./App.css";

// Import components
import NavigationMenu from "./components/nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationMenu></NavigationMenu>
      </header>
      <div className="body"></div>
    </div>
  );
}

export default App;
