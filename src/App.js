import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Home";
import Todo from "./Todo";
import Timeline from "./Timeline";

function App() {
    return (
        <Router>
            <div className="fluid-container">
                <nav>
                    <div
                        className="row text-center"
                        style={{
                            backgroundColor: "aqua",
                            height: "40px",
                            alignItems: "center",
                        }}
                    >
                        <div className="col-4">
                            <Link to="/">Home</Link>
                        </div>
                        <div className="col-4">
                            <Link to="/todo">Todo</Link>
                        </div>
                        <div className="col-4">
                            <Link to="/timeline">Timeline</Link>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/todo">
                        <Todo />
                    </Route>
                    <Route exact path="/timeline">
                        <Timeline />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
