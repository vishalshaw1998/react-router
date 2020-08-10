import React, { useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Home";
import Todo from "./Todo";
import Timeline from "./Timeline";

export const TodoContext = React.createContext(null);
export const PostContext = React.createContext(null);

function App() {
    const [todo, settodo] = useState(["Say Hello"]);
    const [post, setPost] = useState([
        {
            title: "I Am Hungry",
            comments: ["Hey Me Too"],
            likes: 0,
            dislikes: 0,
        },
    ]);
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
                        <TodoContext.Provider value={{ todo, settodo }}>
                            <Todo />
                        </TodoContext.Provider>
                    </Route>
                    <Route exact path="/timeline">
                        <PostContext.Provider value={{ post, setPost }}>
                            <Timeline />
                        </PostContext.Provider>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
