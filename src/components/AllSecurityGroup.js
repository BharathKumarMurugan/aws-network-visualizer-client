import React, { useEffect, useState } from "react";
import Loader from "./Loader";
function AllSecurityGroups() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading, isError, setIsError] = useState(false);

    const fetchItems = async () => {
        setIsLoading(true);
        const response = await fetch("");
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
    if (isLoading) return <Loader />;
    if (isError) return <div>Error</div>;
    return items.length > 0 ? (
        <div>
            <h2>SecurityGroups</h2>
        </div>
    ) : (
        <div>0 SecurityGroups</div>
    );
}

export default AllSecurityGroups;
