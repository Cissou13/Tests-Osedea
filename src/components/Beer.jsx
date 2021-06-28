import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Beer = () => {
    const [singleBeer, setSingleBeer] = useState([]);
    const { id } = useParams();
    const singleUrl = `https://api.punkapi.com/v2/beers/${id}`;

    useEffect(() => {
        const fetchSingleBeer = async () => {
            const singleResult = await axios.get(singleUrl);
            setSingleBeer(singleResult.data);
        };

        fetchSingleBeer();
    }, [singleUrl]);

    return (
        <div className="singleBeer-container">
            {singleBeer.map(
                ({
                    id: idBeer,
                    name,
                    description,
                    image_url: imageURL,
                    first_brewed: brewDate,
                    food_pairing: foodPair,
                }) => (
                    <li key={idBeer} className="singleBeer-item">
                        <h3>
                            <span className="h3-title">Beer name : </span>
                            {name}
                        </h3>
                        <h4>First brewed : {brewDate}</h4>
                        <img src={imageURL} alt={name} title={name} className="beer-item-img" />

                        <blockquote>{description}</blockquote>
                        <div className="meal-container">
                            <p>
                                <strong>What meal fits best this beer ?</strong>
                            </p>
                            <p>
                                <em>{foodPair[0]}</em>
                            </p>
                        </div>
                        <Link to="/beers">
                            <button type="button" className="btn">
                                Return to beer's list
                            </button>
                        </Link>
                    </li>
                ),
            )}
        </div>
    );
};

export default Beer;
