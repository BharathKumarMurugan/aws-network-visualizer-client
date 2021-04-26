import React, { useEffect, useState } from "react";
import Loader from "./Loader";
function TransitGateway() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading, isError, setIsError] = useState(false);

    const fetchItems = async () => {
        setIsLoading(true);
        const response = await fetch(
            "http://localhost:5000/api/networks/transit/all"
        );
        if (response.ok) {
            const items = await response.json();
            setItems(items);
            setIsLoading(false);
        } else {
            setIsLoading(false);
            setIsError(true);
        }
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
    const statusStyling = {
        margin: "4px",
        width: "15px",
        height: "15px",
        borderRadius: "50%",
    };
    const transitStatus = (status) => {
        return <div style={statusStyling} className={status}></div>;
    };
    const renderWithCharLimit = (value) => {
        const MAX_CHAR_LENGTH = 24;
        return value.length > MAX_CHAR_LENGTH
            ? `${value.substring(0, MAX_CHAR_LENGTH)}...`
            : value;
    };
    const renderTableHeader = () => {
        return Object.keys(items[0]).map((attr) => <th key={attr}>{attr}</th>);
    };
    const renderTableRow = () => {
        return items.map((transit) => {
            return (
                <tr key={transit.Id}>
                    <td>{transit.Id}</td>
                    <td>{transitStatus(transit.State)}</td>
                    <td
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={transit.Name}
                    >
                        {transit.Name ? renderWithCharLimit(transit.Name) : "-"}
                    </td>
                    <td>{arrayFormater(transit.TransitGatewayCIDR)}</td>
                    <td>{transit.DnsSupport}</td>
                </tr>
            );
        });
    };
    if (isLoading) return <Loader />;
    if (isError) return <div>Error</div>;
    return items.length > 0 ? (
        <div className="card border-light shadow-sm p-2 mb-5 bg-body rounded">
            <div className="card-body">
                <h5 className="card-title">
                    Transit Gateway{" "}
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
                Transit Gateway{" "}
                <span className="badge rounded-pill bg-primary">
                    {items.length}
                </span>
            </h5>
        </div>
    );
}

export default TransitGateway;
