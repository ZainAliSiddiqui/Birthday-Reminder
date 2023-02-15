import React, { useState } from 'react';
import Data from "./Data";
const List = () => {
    const [people, setPeople] = useState(Data);
    return (
        <>
            <div
                className='w-[30%] p-[25px] rounded-[10px] bg-pink-900'>
                <h1
                    className='text-center font-sans text-white text-[30px]'>{people.length} Birthdays Today!
                </h1>
                {people.map((person, index) => {
                    const { name, img, age } = person;
                    return (
                        <div
                            className='flex items-center text-white'
                            key={index} >
                            <img
                                className='w-[50px] rounded-[50px]'
                                src={img} alt={name} />
                            <div
                                className='p-[20px]'>
                                <h4>{name}</h4>
                                <h4>{age}</h4>
                            </div>
                        </div>
                    );
                })}
                <button
                    className='w-full p-[15px] border-none rounded-[10px] bg-gray-900 text-white mt-6 cursor-pointer text-[20px]'
                    onClick={() => { setPeople([]); }}>Clear All</button>
            </div>
        </>
    );
};

export default List;