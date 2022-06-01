import React from 'react';
import './Teacher.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {  FaFacebook, FaTwitter } from 'react-icons/fa';


const Teacher = (props) => {
    const { Name, Age, Title, Salary, Faculty, img } = props.teacher;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div>
            <div className='teacher'>
                <img src={img} alt="" />
                <h3> Name : {Name}</h3>
                <h4> Title :{Title}</h4>
                <h5>Age : {Age} </h5>
                <p>Faculty: {Faculty}</p>
                <h6>Salary : {Salary}</h6>
                <button
                    onClick={() => props.addtocart(props.teacher)}
                    className='button'> {element}Add to card</button>

                <div>

                    <a className='icon-tag' href="https://web.facebook.com/profile.php?id=100005932126378"><FaFacebook size='2rem' /></a>
                    <a href="www.twitter.com">

                        <FaTwitter size='2rem' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Teacher;