import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">User ID</h1>
        <p className="text-lg">{id}</p>
      </div>
    </div>
  );
};

export default User;