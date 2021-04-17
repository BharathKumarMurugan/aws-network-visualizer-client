import React, { Component } from "react";
import Loader from "./Loader";

class AllSecurityGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allSecurityGroups: [],
            isLoading: false,
            isError: false,
        };
    }
    async componentDidMount() {
        this.setState({ isLoading: true });
        const response = await fetch("http://localhost:5000/api/networks/");
        if (response.ok) {
            const allSecurityGroups = response.json();
            this.setState({ allSecurityGroups, isLoading: false });
        } else {
            this.setState({ isLoading: false, isError: true });
        }
    }
    renderTableHeader = () => {
        return Object.v;
    };
    renderTableRow = () => {};
    render() {
        const { allSecurityGroups, isLoading, isError } = this.state;
        if (isLoading) return <Loader />;
        if (isError) return <div>Error...</div>;
        return allSecurityGroups.length > 0 ? (
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>{this.renderTableHeader()}</tr>
                    </thead>
                    <tbody>{this.renderTableRow()}</tbody>
                </table>
            </div>
        ) : (
            <div>0 Security Groups</div>
        );
    }
}

export default AllSecurityGroup;
