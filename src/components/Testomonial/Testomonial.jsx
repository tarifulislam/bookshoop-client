
import './testimonial.css'
import bannerImg from './../../assets/img/girl.png'
const Testomonial = () => {
    return (
        <div className=" bannerBg px-[2%] py-[4%]   md:py-[2%] shadow-md">
            <div className=" container mx-auto">
                <div className=' flex flex-col md:flex-row items-center md:justify-between'>
                    <div className='w-full md:w-8/12 order-2 md:order-1'>
                        <div className='w-full md:w-2/4 space-y-1'>
                            <div className='flex items-center gap-2'>
                                <div style={{height: "2px", backgroundColor: "#ED553B"}} className=' w-6 h-1  bg-black'></div>
                                <p className=' text-[#ED553B]'>ebook</p>
                            </div>
                            <h2 className='text-[#173F5F] font-bold text-3xl pb-4'> Access, Read, Practice & Engage with Digital Content (eBook) </h2>
                            <p className='text-[#393280be] leading-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div className="join w-full py-4">
                                <input className="input input-bordered w-9/12 join-item" placeholder="Email"/>
                                <button className="btn  btn-secondary bg-[#ED553B] join-item rounded-r-md">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full md:w-4/12 order-1 md:order-2'>
                        <img src={bannerImg} alt="" />
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default Testomonial;