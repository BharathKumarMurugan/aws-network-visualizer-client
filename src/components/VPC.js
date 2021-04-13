import React, { Component } from "react";
import Loader from "./Loader";

class VPC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vpcs: [],
            isLoading: false,
            isError: false,
        };
    }
    async componentDidMount() {
        this.setState({ isLoading: true });
        const response = await fetch(
            "http://localhost:5000/api/networks/vpc/all"
        );
        if (response.ok) {
            const vpcs = await response.json();
            this.setState({ vpcs: vpcs, isLoading: false });
        } else {
            this.setState({ isError: true, isLoading: false });
        }
    }
    renderTableHeader = () => {
        return Object.keys(this.state.vpcs[0]).map((attr) => (
            <th key={attr}>{attr}</th>
        ));
    };
    renderTableRow = () => {
        return this.state.vpcs.map((vpc) => {
            return (
                <tr key={vpc.Id}>
                    <td>{vpc.Id}</td>
                    <td>{vpc.CidrBlock}</td>
                    <td>{vpc.Tenancy}</td>
                    <td>{vpc.DhcpOptionsId}</td>
                    <td>{vpc.State}</td>
                    <td>{vpc.Name}</td>
                </tr>
            );
        });
    };
    render() {
        const { vpcs, isLoading, isError } = this.state;
        if (isLoading) {
            return <Loader />;
        }
        if (isError) {
            return <div>Error...</div>;
        }
        return vpcs.length > 0 ? (
            <div className="table-reponsive">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>{this.renderTableHeader()}</tr>
                    </thead>
                    <tbody>{this.renderTableRow()}</tbody>
                </table>
            </div>
        ) : (
            <div>0 VPCs</div>
        );
    }
}

export default VPC;
