import React from "react";

function RouteTable({ items }) {
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
    const renderTableRow = () => {
        return items.map((rt) => {
            return (
                <tr key={rt.Id}>
                    <td>{rt.Id}</td>
                    <td>{rt.Name}</td>
                    <td>{arrayFormater(rt.SubnetAssociation)}</td>
                    <td>{rt.Main}</td>
                    <td>{arrayFormater(rt.RoutesDestination)}</td>
                    <td>{arrayFormater(rt.RoutesTarget)}</td>
                    <td>{arrayFormater(rt.RoutesState)}</td>
                </tr>
            );
        });
    };

    return items.length > 0 ? (
        <div className="card border-light shadow-sm p-2 mb-5 bg-body rounded">
            <div className="card-body">
                <h5 className="card-title">
                    Route Table{" "}
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
                Route Table{" "}
                <span className="badge rounded-pill bg-primary">
                    {items.length}
                </span>
            </h5>
        </div>
    );
}

export default RouteTable;
