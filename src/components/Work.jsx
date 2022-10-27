import ReactTaskify from '../assets/react-taskify-app.png';
import ReactShoppingCart from '../assets/react-shopping-cart-app.png';
import ReactYoutube from '../assets/react-youtube-clone.png';
import ReactInstagram from '../assets/react-instagram-clone.png';
import LaravelJobsApp from '../assets/laravel-jpbs-app.png';

const Work = () => {
    return (
        <div className="bg-[#0a192f] text-gray-300 w-full md:h-screen" name="work">
            {/* container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">Work</p>
                    <p className="py-6">Check out some of my work</p>
                </div>

                {/* container for all projects */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* card item */}
                    <div style={{backgroundImage: `url(${ReactTaskify})`}}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-center font-bold text-white tracking-wider'>
                                React JS Taskify App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/IndriesAndrei/react-typescript-app" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                     {/* card item */}
                     <div style={{backgroundImage: `url(${ReactInstagram})`}}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-center font-bold text-white tracking-wider'>
                                React JS Instagram App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/IndriesAndrei/react-instagram-clone-app" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>


                     {/* card item */}
                     <div style={{backgroundImage: `url(${ReactShoppingCart})`}}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-center font-bold text-white tracking-wider'>
                                React JS ShoppingCart App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/IndriesAndrei/react-shopping-cart-app" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* card item */}
                    <div style={{backgroundImage: `url(${ReactYoutube})`}}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-center font-bold text-white tracking-wider'>
                                React JS Youtube Clone App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/IndriesAndrei/React-Youtube-Clone" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                      {/* card item */}
                      <div style={{backgroundImage: `url(${LaravelJobsApp})`}}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-center font-bold text-white tracking-wider'>
                                Laravel Jobs App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/IndriesAndrei/laravel9-app" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Work;