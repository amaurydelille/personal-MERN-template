import React from 'react';

const HomePage = () => {
    return(
        <div
            id='home'
            className='flex flex-col sm:mx-40 font-DMSans'
        >
            
            {/* REGION #1 */}
            <div className='flex flex-col min-h-screen items-start justify-center tracking-tight text-left mx-2'>
                <h1 className='font-bold text-5xl sm:text-7xl'>This is a very cool headline.</h1>
                <p className='font-semibold text-2xl'>This is also a very cool sub headline.</p>
            </div>

        </div>
    );
}

export default HomePage;