

const Slider = () => {
    return (
        <div>
            <div className="container mx-auto md:mb-24 p-6 md:p-0">
                <div className="hero min-h-screen rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/7479SZ1/generative-ai-chef-food-presentation-28914-24291.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="md:w-[897px]">
                            <h1 className="mb-5 text-3xl md:text-5xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <div className=''>
                                <button className="btn bg-[#0BE58A] border-[#0BE58A] mb-6 md:mb-0 md:mr-8 rounded-full font-semibold px-8 text-xl">Explore Now</button>
                                <button className="btn btn-outline bg-none rounded-full text-white font-semibold px-8 text-xl">Our Feedback</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;