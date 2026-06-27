import React, { useState } from 'react'


import { useDispatch, useSelector } from 'react-redux';

import { updateForm } from './slices/Updateslices';
const CustomerAdd = () => {

const user = useSelector((state) => state.update);

const [customername,SetCustomeName] = useState([]);
const[customerage ,Setcustomerage] = useState([]);
const [customercity,Setcustomercity] = useState([]);

const dispatch = useDispatch();
  function NowAddcustomers () {
    dispatch(updateForm({name:customername,age:customerage,city:customercity}));


    
  }


  return (
    <div>
      <h3>Add Customers</h3>
      <input type="text"  placeholder={user.name} onchange={(e) =>SetCustomeName(e.target.value)} />
       <input type="number" placeholder={user.age} onchange={(e) => Setcustomerage(e.target.value)} />
        <input type="text"  placeholder= {user.city} onchange={(e) => Setcustomercity(e.target.value)} />
      <button onClick={NowAddcustomers} >submit</button>
  

      
    </div>
    
  )
}

export default CustomerAdd
