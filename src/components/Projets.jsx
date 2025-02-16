import { AppWindow, Bolt, BrickWall, ExternalLink, Info, ShoppingBag } from 'lucide-react';
import React, { useState } from 'react';

const Projets = () => {
    const [info, setInfo] = useState(false);

    return (
        <div className='flex relative items-center justify-center bg-[#1c1c1c] text-gray-100 px-10 h-screen'>
            <div className='grid md:grid-cols-3 gap-4 translate-y-10 transition-all'>
                <div className='relative p-1 rounded-3xl shadow-[10px_10px_20px_#0000008c]'>
                    <div className='space-y-3 p-4 rounded-2xl shadow-[16px_16px_20px_#0000008c_inset] h-full'>
                        <div>
                            <Bolt className='size-10' />
                        </div>
                        <div className='font-bold text-xl'>BATMAN Project</div>
                        <div>
                            Integration of a design model on the theme of Batman as part of learning JavaScript on the SAYNA platform.
                        </div>
                        <div className='absolute top-4 right-4'>
                            <a href="https://github.com/wharton-git/SAYNA-JAVASCRIPT-BATMAN2" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 text-black bg-gray-100 w-max p-2 rounded-2xl'>
                                <div>GitHub</div>
                                <ExternalLink />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='relative p-1 rounded-3xl shadow-[10px_10px_20px_#0000008c] md:col-span-2 '>
                    <div className='space-y-3 p-4 rounded-2xl shadow-[16px_16px_20px_#0000008c_inset] h-full'>
                        <div>
                            <ShoppingBag className='size-10' />
                        </div>
                        <div className='font-bold text-xl'>Competitive Sales</div>
                        <div>
                            A project in the educational framework. HMI project in 3rd year of Computer Science degree at ENI Fianarantsoa Based on React + Vite and Laravel in BackEnd.
                        </div>
                        <div className='absolute top-4 right-4'>
                            <a href="https://github.com/wharton-git/venteConcurentielle" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 text-black bg-gray-100 w-max p-2 rounded-2xl'>
                                <div>GitHub</div>
                                <ExternalLink />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='rounded-3xl space-y-3 p-1 shadow-[10px_10px_20px_#0000008c] hidden md:block md:col-span-2'>
                    <div className='space-y-3 p-4 rounded-2xl shadow-[16px_16px_20px_#0000008c_inset] h-full'>
                        <div>
                            <BrickWall className='size-10' />
                        </div>
                        <div className='font-bold text-xl'>NGFW</div>
                        <div>
                            Study and implementation of new generation firewalls, in this case OPNsense, as part of an internship within the company S.P.A.T.
                        </div>
                    </div>
                </div>
                <div className='relative rounded-3xl space-y-3 p-1 shadow-[10px_10px_20px_#0000008c] hidden md:block'>
                    <div className='space-y-3 p-4 rounded-2xl shadow-[16px_16px_20px_#0000008c_inset] h-full'>
                        <div>
                            <AppWindow className='size-10' />
                        </div>
                        <div className='font-bold text-xl'>Desktop</div>
                        <div>
                            Creation of a sales and stock management office application for the AMADIA Fianarantsoa association.
                        </div>
                        <div className='absolute top-4 right-4'>
                            <a href="https://github.com/wharton-git/venteConcurentielle" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 text-black bg-gray-100 w-max p-2 rounded-2xl'>
                                <div>GitHub</div>
                                <ExternalLink />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-3 right-3'>
                <a href="https://github.com/wharton-git?tab=repositories">
                    <div
                        onMouseEnter={() => setInfo(true)}
                        onMouseLeave={() => setInfo(false)}
                        className='flex gap-2 p-2 bg-gray-100 text-black rounded-full transition-all cursor-pointer w-max items-center'
                    >
                        {info && <div className='text-sm'>Visit my GitHub for more projects</div>}
                        <Info className='size-6' />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Projets;
