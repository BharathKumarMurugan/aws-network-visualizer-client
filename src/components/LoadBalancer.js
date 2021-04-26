import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
function LoadBalancer() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading, isError, setIsError] = useState(false);

    const fetchItems = async () => {
        setIsLoading(true);
        const response = await fetch(
            "http://localhost:5000/api/networks/elb/all"
        );
        if (response.ok) {
            const items = await response.json();
            console.log(items);
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
    const lbStatus = (status) => {
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
        return items.map((lb) => {
            return (
                <tr key={lb.LoadBalancerName}>
                    <td>{lbStatus(lb.State)}</td>
                    <td
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={lb.LoadBalancerName}
                    >
                        {renderWithCharLimit(lb.LoadBalancerName)}
                    </td>
                    <td>{lb.Type}</td>
                    <td>{lb.Scheme}</td>
                    <td
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={lb.DNS}
                    >
                        {renderWithCharLimit(lb.DNS)}
                    </td>
                    <td>
                        <Link
                            to={`/vpc/${lb.VPC}`}
                            style={{ textDecoration: "none" }}
                        >
                            {lb.VPC}
                        </Link>
                    </td>
                    <td>{arrayFormater(lb.AZs)}</td>
                    <td>{arrayFormater(lb.Subnets)}</td>
                    <td>{arrayFormater(lb.SecurityGroups)}</td>
                    <td>{lb.IPType}</td>
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
                    Load Balancers{" "}
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
                Load Balancers{" "}
                <span className="badge rounded-pill bg-primary">
                    {items.length}
                </span>
            </h5>
        </div>
    );
}

export default LoadBalancer;
