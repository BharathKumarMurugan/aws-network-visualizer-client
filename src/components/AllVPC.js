import React, { Component } from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";

class AllVPC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vpcs: [],
            isLoading: true,
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
    statusStyling = () => {
        return {
            margin: "4px",
            width: "15px",
            height: "15px",
            borderRadius: "50%",
        };
    };
    vpcStatus = (status) => {
        return <div style={this.statusStyling()} className={status}></div>;
    };
    renderWithCharLimit = (value) => {
        const MAX_CHAR_LENGTH = 24;
        return value.length > MAX_CHAR_LENGTH
            ? `${value.substring(0, MAX_CHAR_LENGTH)}...`
            : value;
    };
    renderTableHeader = () => {
        return Object.keys(this.state.vpcs[0]).map((attr) => (
            <th key={attr}>{attr}</th>
        ));
    };
    renderTableRow = () => {
        return this.state.vpcs.map((vpc) => {
            return (
                <tr key={vpc.Id}>
                    <td>{this.vpcStatus(vpc.State)}</td>
                    <td>
                        <Link
                            to={`/vpc/${vpc.Id}`}
                            style={{ textDecoration: "none" }}
                        >
                            {vpc.Id}
                        </Link>
                    </td>
                    <td
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={vpc.Name}
                    >
                        {vpc.Name ? this.renderWithCharLimit(vpc.Name) : "-"}
                    </td>
                    <td>{vpc.CidrBlock}</td>
                    <td>{vpc.Tenancy}</td>
                    <td>{vpc.DhcpOptionsId}</td>
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
            <div className="card border-light shadow-sm p-2 mb-5 bg-body rounded">
                <div className="card-body">
                    <h5 className="card-title">
                        VPC{" "}
                        <span className="badge rounded-pill bg-primary">
                            {vpcs.length}
                        </span>
                    </h5>
                    <div className="table-reponsive">
                        <table className="table table-hover">
                            <thead className="thead-dark">
                                <tr>{this.renderTableHeader()}</tr>
                            </thead>
                            <tbody>{this.renderTableRow()}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        ) : (
            <div className="card border-light shadow-sm p-2 mb-5 bg-body rounded">
                <h5 className="card-title">
                    VPC{" "}
                    <span className="badge rounded-pill bg-primary">
                        {vpcs.length}
                    </span>
                </h5>
            </div>
        );
    }
}

export default AllVPC;
