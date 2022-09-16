import { HashRouter as Router, Route, Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comments from "../Comments/Comments";
import Feedback from "../Feedback/Feedback";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4>Don't forget it!</h4>
                </header>
                <div>
                    <Route
                        exact
                        path="/">
                        <Feeling />
                    </Route>
                    <Route
                        exact
                        path="/understanding">
                        <Understanding />
                    </Route>
                    <Route
                        exact
                        path="/support">
                        <Support />
                    </Route>
                    <Route
                        exact
                        path="/comments">
                        <Comments />
                    </Route>
                    <Route
                        exact
                        path="/feedback">
                        <Feedback />
                    </Route>
                </div>
            </Router>
        </div>
    );
}

export default App;
