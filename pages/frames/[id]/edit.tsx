import { useRouter } from 'next/router';
import React from 'react'
import EditOptions from '../../../components/EditOptions';

const Edit = () => {
  const router = useRouter();

  const { id } = router.query;

  return (
      <div className=' bg-gray-1 flex flex-row items-center'>
          <div className='w-[35%] bg-gray-1 h-screen flex flex-row items-center pt-[5rem] border-r-2 border-solid border-gray-4 '></div>
          <div className='w-[35%] bg-gray-1 h-screen flex flex-row items-center pt-[5rem] '></div>
          <div className='w-[30%] bg-gray-4 h-screen flex flex-row items-center pt-[5rem] p-[2rem]'>
            <EditOptions/>
          </div>
      </div>
  );
}

export default Edit