import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Vpc from "./Vpc";
import Subnet from "./Subnet";
import AllSecurityGroups from "./AllSecurityGroup";
import RouteTable from "./RouteTable";
import InternetGateway from "./InternetGateway";
import NatGateway from "./NatGateway";
import Instances from "./Instances";
import VPCPeering from "./VPCPeering";

function AllItems({ match }) {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading, isError, setIsError] = useState(false);

    const fetchItems = async () => {
        setIsLoading(true);
        const response = await fetch(
            `http://localhost:5000/api/networks/vpc?vpcId=${match.params.id}`
        );
        if (response.ok) {
            const items = await response.json();
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
            <Vpc items={items[0]} />
            <InternetGateway items={items[1]} />
            <Subnet items={items[2]} />
            <RouteTable items={items[3]} />
            <VPCPeering items={items[7]} />
            <NatGateway items={items[5]} />
            <Instances items={items[6]} />
            <AllSecurityGroups items={items[4]} />
        </div>
    ) : (
        <div>0 Items</div>
    );
}

export default AllItems;
