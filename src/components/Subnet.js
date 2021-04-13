import React, { Component } from "react";
import Loader from "./Loader";

class Subnet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subnets: [],
            isLoading: false,
            isError: false,
        };
    }
    async componentDidMount() {
        this.setState({ isLoading: true });
        const response = await fetch("http://localhost:5000/api/");
        if (response.ok) {
            const subnets = await response.json();
            this.setState({ subnets, isLoading: false });
        } else {
            this.setState({ isError: true, isLoading: false });
        }
    }
    renderTableHeader = () => {
        return Object.keys(this.state.subnets[0]).map((attr) => (
            <th key={attr}>{attr}</th>
        ));
    };
    renderTableRow = () => {
        return this.state.subnets.map((subnet) => {
            return (
                <tr key={subnet.Id}>
                    <td>{subnet.Id}</td>
                    <td>{subnet.Id}</td>
                    <td>{subnet.Id}</td>
                    <td>{subnet.Id}</td>
                    <td>{subnet.Id}</td>
                    <td>{subnet.Id}</td>
                    <td>{subnet.Id}</td>
                </tr>
            );
        });
    };
    render() {
        const { subnets, isLoading, isError } = this.state;
        if (isLoading) return <Loader />;
        if (isError) return <div>Error...</div>;
        return subnets.length > 0 ? (
            <div className="table-reponsive">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>{this.renderTableHeader()}</tr>
                    </thead>
                    <tbody>{this.renderTableRow()}</tbody>
                </table>
            </div>
        ) : (
            <div>0 Subnets</div>
        );
    }
}

export default Subnet;
