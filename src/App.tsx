import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  const isAuthenticated = false; // Replace with your actual authentication logic

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <PrivateRoute
          path="/dashboard"
          component={Dashboard}
          isAuthenticated={isAuthenticated}
        />
      </Switch>
    </Router>
  );
}

export default App;
