import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { UserProvider } from "./UserContext";
import ForgotPass from "./components/ForgotPass";
import ResetPassword from "./components/ResetPass";
import RegisterUser from "./components/Register";
import UserLogin from "./components/UserLogin";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <UserProvider>
        <div className="container px-0">
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route
            render={({ location }) => (
              <SwitchTransition>
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames="fadeLeft"
                  mountOnEnter={true}
                  unmountOnExit={true}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={UserLogin}></Route>
                    <Route
                      exact
                      path="/forgotpassword"
                      component={ForgotPass}
                    ></Route>
                    <Route path="/reset/:id" component={ResetPassword}></Route>
                    <Route
                      exact
                      path="/register"
                      component={RegisterUser}
                    ></Route>
                    <Route path="*" component={NotFound}></Route>
                  </Switch>
                </CSSTransition>
              </SwitchTransition>
            )}
          />
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
