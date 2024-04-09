import React from 'react';


function LandingPage() {
    return (
        <div className="bg-black-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <nav className="md:col-span-1 text-white p-5 bg-green-800">
                    <ul className="grid-cols-3">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </nav>
                <main className="md:col-span-2">
                    <div className="text-center">
                        <h3 className="bg-green-800 text-white font-bold p-4 drop-shadow-md outline">A'YO Great Lunch Deals</h3>

                        <div className="flex flex-wrap justify-center">
                            <div className="p-5">
                                <img className="w-max" src="./afo.jpg" alt="Efo Riro" />
                                <div className="text-center">
                                    <h1 className="text-xl bg-green-800 text-gray-800 p-4">Efo Riro</h1>
                                </div>
                                <button type="button" className="btn bg-white text-black hover:bg-gray-200 px-4 py-2 mt-2">Order Now</button>
                            </div>

                            <div className="p-5">
                                <img className="w-max" src="./semo.jpg" alt="Egusi and Semovita" />
                                <div className="text-center">
                                    <h1 className="text-2xl bg-green-800 text-gray-800 p-4">Egusi and Semovita</h1>
                                </div>
                                <button type="button" className="btn bg-white text-black hover:bg-gray-200 px-4 py-2 mt-2">Order Now</button>
                            </div>

                            <div className="p-5">
                                <img className="w-max" src="./spag.jpeg" alt="Stir Fry Spaghetti" />
                                <div className="text-center">
                                    <h1 className="text-2xl bg-green-800 text-gray-800 p-4">Stir Fry Spaghetti</h1>
                                </div>
                                <button type="button" className="btn bg-white text-black hover:bg-gray-200 px-4 py-2 mt-2">Order Now</button>
                            </div>

                            <div className="p-5">
                                <img className="w-max" src="./rice.jpeg" alt="Stir Fry Rice" />
                                <div className="text-center">
                                    <h1 className="text-2xl bg-green-800 text-gray-800 p-4">Stir Fry Rice</h1>
                                </div>
                                <button type="button" className="btn bg-white text-black hover:bg-gray-200 px-4 py-2 mt-2">Order Now</button>
                            </div>
                        </div>

                        <div className="flex justify-center w-100 relative">
                            <img className="h-full" src="./spread.jpg" alt="Taste" />
                            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center hover-overlay">
                                <p className="text-white text-center">THE TASTE THAT MAKES YOU FEEL AWESOME</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default LandingPage;
