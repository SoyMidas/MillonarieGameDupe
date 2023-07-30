import React from 'react';
import Data from '../data/profile'

// Función de hash muy simple para convertir una cadena en un número
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i);
  }
  return hash;
}

function generateRandomNumber(min, max, seed) {
  const pseudoRandom = (seed % (max - min + 1)) + min;
  return pseudoRandom;
}

function generateRandomCode(name) {
  const seed = simpleHash(name);
  let code = '';
  for (let i = 0; i < 4; i++) {
    const block = `${generateRandomNumber(100, 999, seed + i)}`;
    code += `${block} `;
  }
  return code.trim();
}

const EarningsPageInfo = (props) => {
  const name = props.Name;
  const randomCode = generateRandomCode(name);

  return (
    <div className={`
      p-4 bg-[linear-gradient(90deg,_#1E1E1E_56.77%,_#D9D9D9_56.78%)] rounded-2xl shadow-lg w-80 aspect-video text-primary
      flex flex-col justify-between font-bold z-10
      `}>
        <p className="text-sm text-colors-gray-300">{randomCode}</p>
        <p className='text-lg'>{name}</p>
        <div>
          <p className='text-sm'>Cash:</p>
          <p className='text-colors-lime-500 font-bold text-lg'>$ {Data.Cash}</p>
        </div>
    </div>
  );
};

export default EarningsPageInfo;