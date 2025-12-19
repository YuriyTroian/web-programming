import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { decrementAmount, incrementAmount, removeFromCart } from '../../redux/actions';
import img_static from '../../img/promo.png'

import './cart.css'

function Cart() {
    const objectsData = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Use useNavigate for version 6


    const handleRemoveFromCart = (objectDataId) => {
        dispatch(removeFromCart(objectDataId));
    };

    const handleIncrementAmount = (objectDataId) => {
        dispatch(incrementAmount(objectDataId));
    };

    const handleDecrementAmount = (objectDataId) => {
        dispatch(decrementAmount(objectDataId));
    };

    const totalAmount = objectsData.reduce((total, item) => {
        return total + item.objectData.price * item.amount;
    }, 0);

    const calculateTotalAmount = (price, amount) => {
        return price * amount;
    };

    const imagePath = img_static;

    const goBack = () => {
        window.history.back();
    };

    const handleContinue = () => {
        if (objectsData.length > 0) {
            navigate('/Checkout');
        } else {
            alert("The cart is empty. Add stones to cart to continue.");
        }
    };

    return(
        <div className="cart__page">
            <div className="cart__elements">
                {objectsData.map((object) => (
                    <div className="cart__object">
                        <img className='cart__img' src={imagePath} height={85} width={85}/>
                        <div className='cart__texts'>
                            <div className='cart__object__title'>

                                {object.objectData.title}
                            </div>
                            <div className='cart__object__strength'>
                                Strength: {object.objectData.strength}
                            </div>
                            <div className='cart__object__price'>
                                Price: {object.objectData.price} $
                            </div>
                        </div>
                        <div className='cart__object__right'>
                            <button className='cart__object__increment' onClick={() => handleIncrementAmount(object.objectData.id)}>
                                +
                            </button>
                            <div className='cart__object__amount'>
                                {object.amount}
                            </div>
                            <button className='cart__object__increment' onClick={() => handleDecrementAmount(object.objectData.id)}>
                                -
                            </button>
                            <div className='cart__object__total-price'>
                                {calculateTotalAmount(object.objectData.price, object.amount)} $
                            </div>
                            <button className='cart__object__remove' onClick={() => handleRemoveFromCart(object.objectData.id)}>
                                remove
                            </button>
                        </div>
                    </div>
                ))}
                <div className="cart__total">
                    Total: {objectsData.reduce((total, item) => total + calculateTotalAmount(item.objectData.price, item.amount), 0)} $
                </div>
                <div className="cart__buttons">
                    <button className='cart__button__goback' onClick={goBack}>
                        Go Back
                    </button>
                    <button className='cart__button__continue' onClick={handleContinue}>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
