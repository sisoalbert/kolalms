import React from "react";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import PrivateRoute from "./pages/PrivateRoute";
import { Provider } from "react-redux";
import store from "./state/store";
import Media from "./pages/media/Media";
import Courses from "./pages/courses/Courses";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

function App() {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/courses" component={Courses} />
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/media" component={Media} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
