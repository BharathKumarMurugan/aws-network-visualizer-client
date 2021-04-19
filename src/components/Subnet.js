import React, { useEffect, useState } from "react";
import Loader from "./Loader";

function Subnet() {
    useEffect(() => {
        fetchSubnets();
    }, []);
    const [subnets, setSubnets] = useState([]);
    const [isLoading, setIsLoading, isError, setIsError] = useState(false);
    const fetchSubnets = async () => {
        setIsLoading(true);
        const response = await fetch("");
        if (response.ok) {
            const subnets = await response.json();
            console.log(subnets);
            setSubnets(subnets);
            setIsLoading(false);
        } else {
            setIsError(true);
            setIsLoading(false);
        }
    };
    const renderTableHeader = () => {
        return Object.keys(subnets[0]).map((attr) => (
            <th key={attr}>{attr}</th>
        ));
    };
    const renderTableRow = () => {
        return subnets.map((subnet) => {
            return (
                <tr key={subnet.Id}>
                    <td>{subnet.Id}</td>
                    <td>{subnet.Id}</td>
                    <td>{subnet.Id}</td>
                    <td>{subnet.Id}</td>
                    <td>{subnet.Id}</td>
                    <td>{subnet.Id}</td>
                    <td>{subnet.Id}</td>
                </tr>
            );
        });
    };
    if (isLoading) return <Loader />;
    if (isError) return <div>Error...</div>;
    return subnets.length > 0 ? (
        <div className="table-reponsive">
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>{renderTableHeader()}</tr>
                </thead>
                <tbody>{renderTableRow()}</tbody>
            </table>
        </div>
    ) : (
        <div>0 Subnets</div>
    );
}

export default Subnet;
