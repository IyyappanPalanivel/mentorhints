import React from 'react';

const HeroSection = () => {

    const quotes = `"We're here to give both newbies and pros a leg up in the software job world."`;

    // Define the URL variable
    const backgroundImageUrl = 'https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080';

    return (
        <section className="w-full">
            <div className="w-full h-[420px] bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center ">
                {/* Photo by '@insolitus' on Unsplash */}
                <div>
                    <h1 className="text-white text-center font-poppins xl:text-3xl lg:text-2xl md:text-xl font-semibold bg-gray-800 p-2 bg-opacity-40 rounded-sm">{quotes}</h1>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;