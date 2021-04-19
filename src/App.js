import React from "react";
import VPC from "./components/VPC";
import "./App.css";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import AllItems from "./components/AllItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Jumbotron} />
                    <Route path="/vpc" exact component={VPC} />
                    <Route path="/vpc/:id" component={AllItems} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
