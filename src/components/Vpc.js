import React from "react";

function Vpc({ items }) {
    const renderTableHeader = () => {
        return Object.keys(items[0]).map((attr) => <th key={attr}>{attr}</th>);
    };
    const renderTableRow = () => {
        return items.map((vpc) => {
            return (
                <tr key={vpc.Id}>
                    <td>{vpc.Id}</td>
                    <td>{vpc.Name}</td>
                    <td>{vpc.CidrBlock}</td>
                    <td>{vpc.Tenancy}</td>
                    <td>{vpc.DhcpOptionsId}</td>
                    <td>{vpc.State}</td>
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
