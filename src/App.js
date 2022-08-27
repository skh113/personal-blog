import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Posts from "./pages/Posts";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <>
                <Header />
                <About />
              </>
            }
          />
          <Route
            exact
            path="/posts"
            element={
              <>
                <Header />
                <Posts />
              </>
            }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
