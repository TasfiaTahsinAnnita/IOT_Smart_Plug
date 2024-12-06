import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Papa from "papaparse";
import "./HomeContent.css";

const HomeContent = () => {
    const [columns, setColumns] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        Papa.parse("/dataset.csv", {
            download: true,
            complete: (result) => {
                if (result.data.length > 0) {
                    setColumns(result.data[0].slice(1)); // Skip the first column (name)
                }
            },
            header: false,
        });
    }, []);

    const handleCardClick = (colName) => {
        // Navigate to the Dashboard with the selected column name as the file name
        navigate(`/dashboard/${colName.toLowerCase()}`);
    };

    return (
        <div className="home-content">
            {columns.length > 0 &&
                columns.map((col, index) => (
                    <div
                        key={index}
                        className="card"
                        onClick={() => handleCardClick(col)}
                    >
                        <p><strong>{col}</strong></p>
                    </div>
                ))}
        </div>
    );
};

export default HomeContent;
