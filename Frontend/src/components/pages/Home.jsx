import React from 'react';

const Home = () => {
  return (
    <div className='flex items-center md:justify-center flex-col w-full min-h-screen p-4'>
      <h1 className='font-bold text-red-950 text-3xl md:text-4xl lg:text-4xl mb-6 fade-in-up text-center'>
        Welcome User!
      </h1>
      <img
        src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXc5MGFlbHk2YjJjazNid2Vmb2NzOTYwNWlsem9hdGtwbHExbmhpaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26u4cqVR8dsmedTJ6/giphy.webp'
        alt='Welcome animation'
        className='rounded-lg max-w-full h-auto entry-animation'
      />
    </div>
  );
};

export default Home;
