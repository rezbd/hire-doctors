import React from 'react';

const Doctor = (props) => {

    const { name, img, specialization, salary, age, country, degree, key } = props.doctor

    console.log(props.doctor)
    return (
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Age: {age}</p>
                    <p className="card-text">Degrees: {degree}</p>
                    <p className="card-text">Specialization: {specialization}</p>
                    <p className="card-text">Country: {country}</p>
                    <p className="card-text">Salary: £{salary}</p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;