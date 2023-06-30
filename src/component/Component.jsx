import React, { useState } from 'react';

export default function Component() {
  const [name, setName] = useState('');
  const [Array, setArray] = useState([]);

  const handleClick = () => {
    setArray([...Array, name]);
  };

  const handleReset = () => {
    setName('');
  };

  return (
    <>
      <h1>{name}</h1>
      <ul>
        {Array.length &&
          Array.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
      </ul>
      <input placeholder="Type your name"type="text"value={name}onChange={(e) => setName(e.target.value)}/>
      <br />
      <button onClick={handleClick}>Add Name</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
