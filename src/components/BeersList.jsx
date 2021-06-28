import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import '../css/Beers.css';

const BeersList = () => {
    const [beers, setBeers] = useState([]);
    const url = 'https://api.punkapi.com/v2/beers';

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(url);
            setBeers(result.data);
        };

        fetchData();
    }, []);

    return (
        <div className="beer-container">
            <h2>Check out our best beers</h2>
            {beers.map(({ name, description, image_url: imageURL, id, abv }) => (
                <div key={id}>
                    <ul>
                        <li className="beer-item">
                            <Link to={`beers/${id}`}>
                                <h1>{name}</h1>
                            </Link>
                            <p>
                                <span className="center" style={{ fontSize: '22px' }}>
                                    <strong>Volume : {abv} % </strong>
                                </span>
                            </p>
                            <hr />
                            <p>{description}</p>
                            <hr />
                            <img src={imageURL} alt={name} title={name} className="beer-item-img" />
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default BeersList;
