import React, { useEffect, useState } from "react";
import Loader from "./Loader";
function AllVPCPeers() {
    useEffect(() => {
        fetchItems();
    }, []);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading, isError, setIsError] = useState(false);

    const fetchItems = async () => {
        setIsLoading(true);
        const response = await fetch(
            "http://localhost:5000/api/networks/peer/all"
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
    const PeeringStatus = (status) => {
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
        return items.map((peer) => {
            return (
                <tr key={peer.Id}>
                    <td>{PeeringStatus(peer.Status)}</td>
                    <td>{peer.Id}</td>
                    <td
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={peer.Name}
                    >
                        {peer.Name ? renderWithCharLimit(peer.Name) : "-"}
                    </td>
                    <td>{peer.RequesterVPC}</td>
                    <td>{arrayFormater(peer.RequesterCIDR)}</td>
                    <td>{peer.Requester}</td>
                    <td>{peer.AccepterVPC}</td>
                    <td>{arrayFormater(peer.AccepterCIDR)}</td>
                    <td>{peer.Accepter}</td>
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
export default AllVPCPeers;
