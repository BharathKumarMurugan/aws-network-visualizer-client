import React, { useEffect, useState } from "react";
import Loader from "./Loader";

function AllItems({ match }) {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading, isError, setIsError] = useState(false);

    const fetchItems = async () => {
        setIsLoading(false);
        const response = await fetch("");
        if (response.ok) {
            const items = await response.json();
            console.log(items);
            setItems(items);
            setIsLoading(false);
        } else {
            setIsError(true);
            setIsLoading(false);
        }
    };
    if (isLoading) return <Loader />;
    if (isError) return <div>Error...</div>;
    return items.length > 0 ? (
        <div>
            <h1>All Items page</h1>
        </div>
    ) : (
        <div>0 Items</div>
    );
}

export default AllItems;
