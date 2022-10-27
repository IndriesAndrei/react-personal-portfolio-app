const About = () => {
    return (
        <div name='about' className="w-full h-screen  bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
                    </div>
                </div>
                <div></div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-3">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>Hi, I'm Andrei, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I have 3 years experience in web development. Technologies used: HTML, CSS, Bootstrap, TailwindCSS, JavaScript, jQuery, PHP (1 year experience with Laravel and 2 years with WordPress). 
                            Started learning ReactJs for about a month now. You can see some of my work on my GitHub profile: https://github.com/IndriesAndrei (PHP, Laravel, ReactJS, JavaScript projects).</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;