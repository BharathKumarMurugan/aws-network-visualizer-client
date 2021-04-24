import React, { useEffect, useState } from "react";
import Loader from "./Loader";

function Jumbotron() {
    useEffect(() => {
        fetchItem();
    }, []);
    const [item, setItem] = useState([]);
    const [isLoading, setIsLoading, isError, setIsError] = useState(false);
    const fetchItem = async () => {
        setIsLoading(true);
        const response = await fetch("http://localhost:5000/api/security/");
        if (response.ok) {
            const item = await response.json();
            console.log(item);
            setItem(item);
            setIsLoading(false);
        } else {
            setIsLoading(false);
            setIsError(true);
        }
    };
    if (isLoading) return <Loader />;
    if (isError) return <div>Error...</div>;
    return (
        <div
            className="p-5 mb-4 bg-light shadow-sm bg-body rounded"
            style={{ backgroundColor: "#eee" }}
        >
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">
                    AWS Infrastructure Visualizer
                </h1>
                <div className="clearfix">
                    <p className="float-start">
                        Account ID:{" "}
                        <span className="text-primary fw-bold">{item[0]}</span>
                    </p>
                    <p className="float-end">
                        Region Name:{" "}
                        <span className="text-primary fw-bold">{item[1]}</span>
                    </p>
                </div>
                <p className="col-md-8 fs-4">
                    A Tool to visualize Amazon Cloud Infrastructure.
                </p>
            </div>
        </div>
    );
}
export default Jumbotron;
