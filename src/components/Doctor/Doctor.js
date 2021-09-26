import React from 'react';
import './Doctor.css';

const Doctor = (props) => {

    const { name, img, specialization, salary, age, country, degree } = props.doctor || {};


    return (
        <div className="col">
            <div className="card p-4">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Age: {age}</p>
                    <p className="card-text">Degrees: {degree}</p>
                    <p className="card-text">Specialization: {specialization}</p>
                    <p className="card-text">Country: {country}</p>
                    <p className="card-text">Salary: £{salary}</p>
                    <button onClick={() => props.handleAddDoctor(props.doctor)} className="btn btn-primary"><i className="fas fa-cart-plus"></i> Hire Doctor</button>
                    <h2><i className="fab fa-linkedin mt-4"></i></h2>
                </div>
            </div>
        </div>
    );
};

export default Doctor;