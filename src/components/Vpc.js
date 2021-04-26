import React from "react";

function Vpc({ items }) {
    const renderTableHeader = () => {
        return Object.keys(items[0]).map((attr) => <th key={attr}>{attr}</th>);
    };
    const statusStyling = {
        margin: "4px",
        width: "15px",
        height: "15px",
        borderRadius: "50%",
    };
    const vpcStatus = (status) => {
        return <div style={statusStyling} className={status}></div>;
    };
    const renderWithCharLimit = (value) => {
        const MAX_CHAR_LENGTH = 24;
        return value.length > MAX_CHAR_LENGTH
            ? `${value.substring(0, MAX_CHAR_LENGTH)}...`
            : value;
    };
    const renderTableRow = () => {
        return items.map((vpc) => {
            return (
                <tr key={vpc.Id}>
                    <td>{vpcStatus(vpc.State)}</td>
                    <td>{vpc.Id}</td>
                    <td>{vpc.Name ? renderWithCharLimit(vpc.Name) : "-"}</td>
                    <td>{vpc.CidrBlock}</td>
                    <td>{vpc.Tenancy}</td>
                    <td>{vpc.DhcpOptionsId}</td>
                </tr>
            );
        });
    };

    return (
        // <div className="card shadow-sm p-3 mb-5 bg-body rounded" style={{ padding: "2vh" }}>
        <div className="card border-light shadow-sm p-2 mb-5 bg-body rounded">
            <div className="card-body">
                <h5 className="card-title">
                    VPC{" "}
                    <span className="badge rounded-pill bg-primary">
                        {items.length}
                    </span>
                </h5>
                <div className="table-reponsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>{renderTableHeader()}</tr>
                        </thead>
                        <tbody>{renderTableRow()}</tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Vpc;
