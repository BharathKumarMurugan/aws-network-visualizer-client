import React from "react";
import "./App.css";
import AllVPC from "./components/AllVPC";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import AllItems from "./components/AllItem";
import LoadBalancer from "./components/LoadBalancer";
import TransitGateway from "./components/TransitGateway";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <React.Fragment>
                        <Route path="/" exact component={Jumbotron} />
                        <div className="container-fluid">
                            <Route path="/vpc" exact component={AllVPC} />
                            <Route path="/vpc/:id" component={AllItems} />
                            <Route path="/elb" exact component={LoadBalancer} />
                            <Route
                                path="/transitgateway"
                                component={TransitGateway}
                            />
                        </div>
                    </React.Fragment>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
