import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Teacher from '../Teacher/Teacher';
import './Teachers.css'

const Teachers = () => {
    const [teachers,setTeachers]= useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        fetch('./details.JSON')
        .then(res => res.json())
        .then(data => setTeachers(data));
    },[]);

    const addtocart =(teacher)=>{
        const newcart = [...cart, teacher];
        setCart(newcart);

   };

    return (
        <div className='teacher-container'>
            <div className='teacher-deatails'>
        {
                teachers.map(teacher => <Teacher 
                    key={teacher.key}
                    addtocart = {addtocart}
                    teacher ={teacher}></Teacher>)
            }
        </div>
        <div>
            <Cart cart = {cart}></Cart>
            
        </div>
        </div>
    );
};

export default Teachers;