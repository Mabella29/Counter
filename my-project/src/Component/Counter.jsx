import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    function handleAdd() {
        if (count < 100) {
            setCount(count + 1);
        }
    }

    function handleSub() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    function handleReset() {
        setCount(0);
    }

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='flex flex-col items-center mx-auto max-w-sm font-mono border-2 border-black rounded-2xl bg-slate-300 p-4'>
                <h2 className='text-4xl font-semibold mb-4'>Counter</h2>

                <p className='text-2xl mb-4'>{count}</p>

               
                <div className='w-full bg-gray-200 rounded-full h-6 mb-4'>
                    <div 
                        className='bg-blue-500 h-6 rounded-full transition-all duration-300' 
                        style={{ width: `${count}%` }}
                    ></div>
                </div>

                <div>
                    <button 
                        onClick={handleAdd} 
                        disabled={count >= 100} 
                        className={`${count >= 100 ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-700'} p-2 m-2 rounded-2xl w-24`}
                    >
                        Add
                    </button>

                    <button 
                        onClick={handleReset} 
                        className='bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded-2xl w-24'
                    >
                        Reset
                    </button>

                    <button 
                        onClick={handleSub} 
                        disabled={count === 0} 
                        className={`${count === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-700'} p-2 m-2 rounded-2xl w-24`}
                    >
                        Subtract
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
