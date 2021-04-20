import React, { useEffect, useState } from "react";

function Vpc() {
    const renderTableHeader = () => {};
    const renderTableRow = () => {};

    return (
        <div className="table-reponsive">
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>{renderTableHeader()}</tr>
                </thead>
                <tbody>{renderTableRow()}</tbody>
            </table>
        </div>
    );
}

export default Vpc;
