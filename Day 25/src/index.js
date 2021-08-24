  
import { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";
import Home from "./components/home";
import About from "./components/about";
import Profile from "./components/profile";
import Dashboard from "./components/dashboard";

const App = () => {
  const [login, setLogin] = useState("notLoggedIn");
  const [loading, setLoading] = useState("");

  useEffect(() => {
    setLoading("Loading...");
    setTimeout(() => {
      setLogin("notLoggedIn");
      setLoading("");
    }, 1000);
  }, []);

  return (
    <>
      <Router>
        <div className="nav">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
          {login === "loggedIn" ? (
            <>
              <Link className="link" to="/profile">
                Profile
              </Link>
              <Link className="link" to="/dashboard">
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link className="link" to="/">
                Profile
              </Link>
              <Link className="link" to="/">
                Dashboard
              </Link>
            </>
          )}
        </div>

        <Switch>
          <Route exact path="/">
            <Home
              setLogin={setLogin}
              login={login}
              loading={loading}
              setLoading={setLoading}
            />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
 
