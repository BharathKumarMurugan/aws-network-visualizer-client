import React from "react";
import "./App.css";
import AllVPC from "./components/AllVPC";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import AllItems from "./components/AllItem";
import LoadBalancer from "./components/LoadBalancer";
import TransitGateway from "./components/TransitGateway";
import AllVPCPeers from "./components/AllVPCPeers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllVPN from "./components/AllVPN";

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <React.Fragment>
                        <Route path="/" exact component={Jumbotron} />
                        <div
                            className="container-fluid"
                            style={{ fontSize: "12px" }}
                        >
                            <Route path="/vpc" exact component={AllVPC} />
                            <Route path="/vpc/:id" exact component={AllItems} />
                            <Route path="/elb" exact component={LoadBalancer} />
                            <Route
                                path="/transitgateway"
                                component={TransitGateway}
                            />
                            <Route
                                path="/vpcpeering"
                                exact
                                component={AllVPCPeers}
                            />
                            <Route path="/vpn" exact component={AllVPN} />
                        </div>
                    </React.Fragment>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
