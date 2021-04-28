import React, { useEffect, useState } from "react";
import Loader from "./Loader";
function AllVPN() {
    useEffect(() => {
        fetchItems();
    }, []);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading, isError, setIsError] = useState(false);

    const fetchItems = async () => {
        setIsLoading(true);
        const response = await fetch(
            "http://localhost:5000/api/networks/vpn/all"
        );
        if (response.ok) {
            setIsLoading(false);
            const items = await response.json();
            setItems(items);
        } else {
            setIsLoading(false);
            setIsError(true);
        }
    };

    const renderTableHeader = () => {
        return Object.keys(items[0]).map((attr) => <th key={attr}>{attr}</th>);
    };
    const statusStyling = {
        margin: "4px",
        width: "15px",
        height: "15px",
        borderRadius: "50%",
    };
    const vpnStatus = (status) => {
        return <div style={statusStyling} className={status}></div>;
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
        return items.map((vpn) => {
            return (
                <tr key={vpn.Id}>
                    <td>{vpnStatus(vpn.State)}</td>
                    <td>{vpn.Id}</td>
                    <td
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={vpn.Name}
                    >
                        {vpn.Name ? renderWithCharLimit(vpn.Name) : "-"}
                    </td>
                    <td>{vpn.Type}</td>
                    <td>{vpn.Category}</td>
                    <td>{vpn.VpnGateway}</td>
                    <td>{vpn.CustomerGateway}</td>
                    <td>{vpn.TransitGateway}</td>
                    <td>{arrayFormater(vpn.Routes)}</td>
                </tr>
            );
        });
    };
    if (isLoading) return <Loader />;
    if (isError) return <div>Error...</div>;
    return items.length > 0 ? (
        <div className="card border-light shadow-sm p-2 mb-5 bg-body rounded">
            <div className="card-body">
                <h5 className="card-title">
                    VPN Connections{" "}
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
                VPN Connections{" "}
                <span className="badge rounded-pill bg-primary">
                    {items.length}
                </span>
            </h5>
        </div>
    );
}
export default AllVPN;
