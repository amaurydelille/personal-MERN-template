import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

const Header = () => {

    const [showSideMenu, setShowSideMenu] = useState(false);

    const links = [
        {
            title: 'Product',
            path: '/#product'
        },
        {
            title: 'Pricing',
            path: '/#pricing'
        },
        {
            title: 'FAQ',
            path: '/#faq'
        }
    ];

    return(
        <div className="relative sm:fixed flex flex-row items-center justify-between font-DMSans sm:backdrop-filter sm:backdrop-blur-lg sm:bg-opacity-50">

            {/* LOGO, TITLE CONTAINER */}
            <div className="flex flex-col p-4 ml-2">
                <a
                    href='/#home'
                    className='font-bold text-2xl'
                >
                    Title
                </a>
            </div>

            <div className='hidden sm:flex flex-row gap-5 p-4 mr-2 font-semibold'>
                {
                    links.map((link, index) => (
                        <a 
                            href={link.path}
                            className='text-black hover:text-neutral-600'
                        >
                            {link.title}
                        </a>
                    ))
                }
            </div>

            <div 
                className='flex sm:hidden p-4'
                onClick={() => setShowSideMenu(true)}
            >
                <MenuOutlined className='text-2xl' />
            </div>

            {/* SIDE MENU */}
            <div 
                className={`sm:hidden fixed flex flex-col top-0 right-0 h-full w-full bg-neutral-100 z-50 transform transition-transform duration-300 ease-in-out p-2 ${
                    showSideMenu ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div 
                    className='flex justify-end p-4 text-black'
                    onClick={() => setShowSideMenu(false)}
                >
                    <CloseOutlined />
                </div>

                <div className='flex flex-col justify-left'>
                    {
                        links.map((link, index) => (
                            <a 
                                href={link.path}
                                className='my-5 text-xl font-semibold'
                                onClick={() => setShowSideMenu(false)}
                            >
                                {link.title}
                            </a>
                        ))
                    }
                </div>
            </div>

        </div>
    );
}

export default Header;