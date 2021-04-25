import React from "react";
function VPCPeering({ items }) {
    const renderTableHeader = () => {
        return Object.keys(items[0]).map((attr) => <th key={attr}>{attr}</th>);
    };
    const renderWithCharLimit = (name) => {
        const MAX_CHAR_LENGTH = 24;
        if (name === null) return null;
        if (name === undefined) return null;
        else {
            return name.length > MAX_CHAR_LENGTH
                ? `${name.substring(0, MAX_CHAR_LENGTH)}...`
                : name;
        }
    };
    const renderTableRow = () => {
        return items.map((peer) => {
            return (
                <tr key={peer.Id}>
                    <td>{peer.Id}</td>
                    <td
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={peer.Name}
                    >
                        {renderWithCharLimit(peer.Name)}
                    </td>
                    <td>{peer.AccepterVPC}</td>
                    <td>{peer.RequesterVPC}</td>
                    <td>{peer.Status}</td>
                </tr>
            );
        });
    };
    return items.length > 0 ? (
        <div className="card border-light shadow-sm p-2 mb-5 bg-body rounded">
            <div className="card-body">
                <h5 className="card-title">
                    VPC Peering{" "}
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
    ) : (
        <div className="card border-light shadow-sm p-2 mb-5 bg-body rounded">
            <h5 className="card-title">
                VPC Peering{" "}
                <span className="badge rounded-pill bg-primary">
                    {items.length}
                </span>
            </h5>
        </div>
    );
}
export default VPCPeering;
