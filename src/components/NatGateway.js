import React from "react";

function NatGateway({ items }) {
    const renderTableHeader = () => {
        return Object.keys(items[0]).map((attr) => <th key={attr}>{attr}</th>);
    };
    const arrayFormater = (input) => {
        if (Array.isArray(input)) {
            return input.map((i) =>
                i === "" || null ? (
                    ""
                ) : (
                    <span>
                        {i}
                        <br />
                    </span>
                )
            );
        }
    };
    const renderTableRow = () => {
        return items.map((nat) => {
            return (
                <tr key={nat.Id}>
                    <td>{nat.Id}</td>
                    <td>{nat.Name}</td>
                    <td>{arrayFormater(nat.PublicIP)}</td>
                    <td>{arrayFormater(nat.PrivateIP)}</td>
                    <td>{nat.SubnetId}</td>
                    <td>{nat.State}</td>
                </tr>
            );
        });
    };

    return items.length > 0 ? (
        <div className="card border-light shadow-sm p-2 mb-5 bg-body rounded">
            <div className="card-body">
                <h5 className="card-title">
                    Nat Gateway{" "}
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
                Nat Gateway{" "}
                <span className="badge rounded-pill bg-primary">
                    {items.length}
                </span>
            </h5>
        </div>
    );
}

export default NatGateway;
