import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './slices/UserSlice';
;


const Customerview = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector(
    (state) => state.users
  );

  console.log("customername",users);
   console.log("customername2",loading);

    useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;



  return (
   <div>
      <h1>Users List</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.firstName}</h3>

  

          <hr />
        </div>
      ))}
    </div>
  )
}

export default Customerview
