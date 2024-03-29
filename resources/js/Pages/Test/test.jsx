import React, { useState } from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout';

export default function Test({auth,tittle}) {
    const [showNumber,setNumber] = useState(0);

    const increment = () => {
        setNumber(showNumber + 1);
    }

    const decrement = () => {
        setNumber(showNumber - 1);
    }

  return (
  <>
  <Authenticated
   user={auth.user}
   header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{tittle}</h2>}
  >
    <div className='container mx-auto'>{showNumber}</div>
    <button type="button" className='bg-blue-500 text-white px-4 py-2 rounded mr-4' onClick={increment}>Increment</button>
    <button type="button" className='bg-red-500 text-white px-4 py-2 rounded ml-4' onClick={decrement}>decrement</button>
  </Authenticated>
  </>
  )
}
