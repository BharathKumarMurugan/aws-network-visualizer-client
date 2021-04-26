import React from "react";
import "./table.css";
function Instances({ items }) {
    const renderTableHeader = () => {
        return Object.keys(items[0]).map((attr) => <th key={attr}>{attr}</th>);
    };
    const statusStyling = {
        margin: "4px",
        width: "15px",
        height: "15px",
        borderRadius: "50%",
    };
    const instanceStatus = (status) => {
        return <div style={statusStyling} className={status}></div>;
    };
    const renderWithCharLimit = (name) => {
        const MAX_CHAR_LENGTH = 24;
        return name.length > MAX_CHAR_LENGTH
            ? `${name.substring(0, MAX_CHAR_LENGTH)}...`
            : name;
    };
    const renderTableRow = () => {
        return items.map((ec2) => {
            return (
                <tr key={ec2.Id}>
                    <td>{instanceStatus(ec2.State)}</td>
                    <td>{ec2.Id}</td>
                    <td
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={ec2.Name}
                    >
                        {renderWithCharLimit(ec2.Name)}
                    </td>
                    <td>{ec2.PrivateIpAddress}</td>
                    <td>{ec2.PublicIpAddress}</td>
                    <td>{ec2.SubnetId}</td>
                </tr>
            );
        });
    };

    return items.length > 0 ? (
        <div className="card border-light shadow-sm p-2 mb-5 bg-body rounded">
            <div className="card-body">
                <h5 className="card-title">
                    EC2 Instances{" "}
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
                EC2 Instances{" "}
                <span className="badge rounded-pill bg-primary">
                    {items.length}
                </span>
            </h5>
        </div>
    );
}

export default Instances;
