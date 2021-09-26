import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Doctor from '../Doctor/Doctor';

const Clinic = () => {
    // state to loop all doctors
    const [doctors, setDoctors] = useState([])

    // state to put selected doctors in the cart
    const [cart, setCart] = useState([])

    // event handler to add doctors
    const handleAddDoctor = (doctor) => {

        const newCart = [...cart, doctor];
        setCart(newCart)
    }

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
                            doctors.map(doctor => <Doctor
                                key={doctor.id}
                                doctor={doctor}
                                handleAddDoctor={handleAddDoctor}
                            />)
                        }

                    </div>
                </div>
                <div className="col-md-3">
                    {/* cart section  */}
                    <Cart
                        cart={cart}
                    />
                </div>
            </div>
        </div>
    );
};

export default Clinic;