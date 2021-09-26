import React from 'react';

const Cart = (props) => {
    const { cart } = props || {};
    // calculation of total salary by reducer method
    const totalReducer = (previousValue, currentValue) => previousValue + parseFloat(currentValue.salary)
    const totalSalary = cart.reduce(totalReducer, 0)
    return (
        <div>
            <h2><i className="fas fa-user-md"></i></h2>
            <h5>Doctors Added: {cart.length}</h5>
            <h5>Total Salary: £{totalSalary}</h5>
            <br />
            <div>
                <h4>Selected Doctors:</h4>
                {
                    cart.map(doctor => <p className="fs-5" key={doctor.id}>{doctor.name}</p>)
                }
            </div>
        </div>
    );
};

export default Cart;