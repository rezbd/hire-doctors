import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Clinic = () => {

    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch("/doctorsData.json")
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div>
            <div className="row container">
                <div className="col-md-9">
                    {/* doctors section */}
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {
                            doctors.map(doctor => <Doctor />)
                        }

                    </div>
                </div>
                <div className="col-md-3">
                    {/* cart section  */}
                    <p>Dummy Cart Text</p>
                </div>
            </div>
        </div>
    );
};

export default Clinic;