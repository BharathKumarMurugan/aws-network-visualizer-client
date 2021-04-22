import React from "react";

function Subnet({ items }) {
    const renderTableHeader = () => {
        return Object.keys(items[0]).map((attr) => <th key={attr}>{attr}</th>);
    };
    const renderTableRow = () => {
        return items.map((subnet) => {
            return (
                <tr key={subnet.Id}>
                    <td>{subnet.Id}</td>
                    <td>{subnet.Name}</td>
                    <td>{subnet.AZ}</td>
                    <td>{subnet.CidrBlock}</td>
                    <td>{subnet.State}</td>
                    <td>{subnet.AvailableIP}</td>
                    <td>
                        {subnet.MapPublicIpOnLaunch ? "Enabled" : "Disabled"}
                    </td>
                </tr>
            );
        });
    };
    return items.length > 0 ? (
        <div className="card border-light shadow-sm p-2 mb-5 bg-body rounded">
            <div className="card-body">
                <h5 className="card-title">
                    Subnet{" "}
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
        <div>
            <h5 className="card-title">
                Subnet{" "}
                <span className="badge rounded-pill bg-primary">
                    {items.length}
                </span>
            </h5>
        </div>
    );
}

export default Subnet;
