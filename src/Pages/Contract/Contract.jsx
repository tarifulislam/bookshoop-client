import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { FaHome , FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import "./contract.css"
const Contract = () => {
    return (
        <div>
            <Header></Header>

            <div className=" bannerBg p-[2%]">
                <div className=" container md:px-[10%] mx-auto min-h-screen">
                    <div className=" text-center py-9 w-full md:w-6/12 mx-auto space-y-3  ">
                        <h2 className=" font-bold text-4xl text-cyan-500 ">Contract Us</h2>
                        <p className="text-[#6a6a6a]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos error inventore molestiae et, nesciunt sunt ut consequuntur incidunt adipisci illo.</p>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center p-6">
                        <div  className=" flex-1 space-y-9 md:order-1 order-2 py-5">
                            <div className=" flex gap-3 items-center ">
                            <div className="">
                               <span className= "bg-white inline-block  p-6 rounded-full">
                               <FaHome/>
                            </span> 
                            </div>
                            <div className="">
                                <h4 className=" text-cyan-500 font-semibold text-2xl">Adress</h4>
                                <p className="text-[#6a6a6a] text-xl">Majar Roal Gaptoli,</p>
                                <p className="text-[#6a6a6a] text-xl">Dhaka 1244</p>
                            </div>
                            </div>
    
                            <div className=" flex  gap-3 items-center">
                            <div className=" ">
                               <span className= "bg-white inline-block  p-6 rounded-full">
                               <FaPhoneAlt />
                            </span> 
                            </div>
                            <div className=" ">
                                <h4 className=" text-cyan-500 font-semibold text-2xl">Phone</h4>
                                <p className="text-[#6a6a6a]  text-xl">01750796830</p>
 
                            </div>
                            </div>
    
                            <div className=" flex gap-3 items-center">
                            <div className=" ">
                               <span className= "bg-white inline-block  p-6 rounded-full">
                               <MdOutlineEmail />
                            </span> 
                            </div>
                            <div className=" w-11/12 ">
                                <h4 className=" text-cyan-500 font-semibold text-2xl">Email</h4>
                                <p className="text-[#6a6a6a]  text-xl">mdtarifulislam4@gmail.com</p>
                                
                            </div>
                            </div>

                        </div>
                        <div className=" flex-1 order-1 md:order-2 bg-white p-9">
                            <h2 className="text-2xl py-3 font-bold">Send Message</h2>
                        <form className=" space-y-8">
                            <input type="text" placeholder="Full name" className=" w-full outline-none border-b-2 py-2 " required />
                            <input type="email" placeholder="Email" className="w-full outline-none border-b-2 py-2 " required />
                            <textarea  className="w-full outline-none border-b-2 py-2 " placeholder="Type text message"></textarea>
                            <button className="btn px-7 bg-[#00A96E] text-white">Send</button>
                        </form>

                        </div>
                    </div>

                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Contract;