import React, { useEffect, useState } from "react";
import Loader from "./Loader";

function RouteTable() {
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
    const renderTableHeader = () => {
        return Object.keys(items[0]).map((attr) => <th key={attr}>{attr}</th>);
    };
    const renderTableRow = () => {
        return items.map((rt) => {
            return (
                <tr key={rt.Id}>
                    <td>{rt.Id}</td>
                    <td>{rt.Id}</td>
                    <td>{rt.Id}</td>
                    <td>{rt.Id}</td>
                    <td>{rt.Id}</td>
                    <td>{rt.Id}</td>
                    <td>{rt.Id}</td>
                </tr>
            );
        });
    };

    if (isLoading) return <Loader />;
    if (isError) return <div>Error...</div>;
    return items.length > 0 ? (
        <div className="table-reponsive">
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>{renderTableHeader()}</tr>
                </thead>
                <tbody>{renderTableRow()}</tbody>
            </table>
        </div>
    ) : (
        <div>0 Route Tables</div>
    );
}
class RouteTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routetable: [],
            isLoading: false,
            isError: false,
        };
    }
    async componentDidMount() {
        this.setState({ isLoading: true });
        const response = await fetch("http://localhost:5000/api/");
        if (response.ok) {
            const routetable = await response.json();
            this.setState({ routetable, isLoading: false });
        } else {
            this.setState({ isError: true, isLoading: false });
        }
    }
    renderTableHeader = () => {
        return Object.keys(this.state.routetable[0]).map((attr) => (
            <th key={attr}>{attr}</th>
        ));
    };
    renderTableRow = () => {
        return this.state.routetable.map((rt) => {
            return (
                <tr key={rt.Id}>
                    <td>{rt.Id}</td>
                    <td>{rt.Id}</td>
                    <td>{rt.Id}</td>
                    <td>{rt.Id}</td>
                    <td>{rt.Id}</td>
                    <td>{rt.Id}</td>
                    <td>{rt.Id}</td>
                </tr>
            );
        });
    };
    render() {
        const { routetable, isLoading, isError } = this.state;
        if (isLoading) return <Loader />;
        if (isError) return <div>Error...</div>;
        return routetable.length > 0 ? (
            <div className="table-reponsive">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>{this.renderTableHeader()}</tr>
                    </thead>
                    <tbody>{this.renderTableRow()}</tbody>
                </table>
            </div>
        ) : (
            <div>0 RouteTable</div>
        );
    }
}

export default RouteTable;
