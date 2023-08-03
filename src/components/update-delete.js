import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './update-delete.css';
import { useNavigate } from 'react-router-dom';

const UpdateDeletePage = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const apiUrl = 'https://api.prestigemotorsvence.com/api/carForSale'; // replace with your API endpoint

    useEffect(() => {
        axios.get(apiUrl)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    const handleUpdateButtonClick = () => {
        navigate('/dashboard/update'); // Change '/update' to the path of your update page
    };

    return (
        <div className="update-delete">
            <div className='all-cards all-card-row-margin'>
                {data.map((car, index) => (
                    <div className="card-sec card-sec-margin" key={index}>
                        <div className="image-section">
                            <img src={car.pictures[0]} alt="Car for sale" style={{ height: '100%', width: '100%' }} />
                        </div>
                        <div className="content-section">
                            <h2>{car.carName}</h2>
                            <p>Mileage: {car.mileage}</p>
                            <h4>DESCRIPTION</h4>
                            <p className='sale-card-des'>
                                {car.smallDescription}
                            </p>
                            <div className='delete-update-btn-container'>
                                <div className='btn-sale-card'><button className='sale-card-btn-delete'>Delete</button></div>
                                <div className='btn-sale-card'><button className='sale-card-btn-update' onClick={handleUpdateButtonClick}>Update</button></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpdateDeletePage;
