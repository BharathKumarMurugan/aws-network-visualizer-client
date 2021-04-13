import VPC from "./components/VPC";

function App() {
    return (
        <div>
            <div className="custom-jumbotron">
                <div className="container">
                    <h1 className="display-4 text-center">
                        VPC Network Visualizer
                    </h1>
                    <div className="clearfix">
                        <div className="text-left">Account Name</div>
                        <div className="text-right">Region</div>
                    </div>
                    {/* <div className="row">
                        <div className="col-xs-6 float-left">
                            Account Name
                            <span className="float-left">Account Name</span>
                        </div>
                        <div className="col-xs-6 float-right">
                            Region
                            <span className="float-right">Region</span>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <VPC /> */}
        </div>
    );
}

export default App;
