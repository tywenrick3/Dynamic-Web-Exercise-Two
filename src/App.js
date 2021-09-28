import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"

function App() {
  return (
    <Router>
      <switch>
        <Route path="/">
          <Home />
        </Route>
      </switch>
    </Router>
  );
}

export default App;
