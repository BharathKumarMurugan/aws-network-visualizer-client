import React from "react";

function NatGateway({ items }) {
    const renderTableHeader = () => {
        return Object.keys(items[0]).map((attr) => <th key={attr}>{attr}</th>);
    };
    const arrayFormater = (input) => {
        if (Array.isArray(input)) {
            return input.map((i, index) =>
                i === "" || null ? (
                    ""
                ) : (
                    <span key={`${i}-${index}`}>
                        {i}
                        <br />
                    </span>
                )
            );
        }
    };
    const renderWithCharLimit = (value) => {
        const MAX_CHAR_LENGTH = 24;
        return value.length > MAX_CHAR_LENGTH
            ? `${value.substring(0, MAX_CHAR_LENGTH)}...`
            : value;
    };
    const statusStyling = {
        margin: "4px",
        width: "15px",
        height: "15px",
        borderRadius: "50%",
    };
    const natStatus = (status) => {
        return <div style={statusStyling} className={status}></div>;
    };
    const renderTableRow = () => {
        return items.map((nat) => {
            return (
                <tr key={nat.Id}>
                    <td>{natStatus(nat.State)}</td>
                    <td>{nat.Id}</td>
                    <td
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={nat.Name}
                    >
                        {nat.Name ? renderWithCharLimit(nat.Name) : "-"}
                    </td>
                    <td>{arrayFormater(nat.PublicIP)}</td>
                    <td>{arrayFormater(nat.PrivateIP)}</td>
                    <td>{nat.SubnetId}</td>
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
