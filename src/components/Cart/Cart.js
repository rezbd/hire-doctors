import React from 'react';

const Cart = (props) => {
    const { cart } = props || {}

    const totalReducer = (previousValue, currentValue) => previousValue + parseFloat(currentValue.fee)

    const totalFee = cart.reduce(totalReducer, 0)
    return (
        <div>
            <h5 className="text-start"><i className="fas fa-user-md"></i> No. of Sessions: {cart.length}</h5>
            <h5 className="text-start">Total Fee: £{totalFee}</h5>
            <div>
                <h4>Selected Doctors:</h4>
                {
                    cart.map(doctor => <p key={doctor.id}>{doctor.name}</p>)
                }
            </div>
        </div>
    );
};

export default Cart;