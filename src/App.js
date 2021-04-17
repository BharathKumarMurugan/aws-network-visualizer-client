import VPC from "./components/VPC";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/vpc" component={VPC} />
                </Switch>
            </div>
        </Router>
    );
}

const Home = () => {
    return <Jumbotron />;
};

export default App;
