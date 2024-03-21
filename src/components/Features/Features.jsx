import { FaLongArrowAltRight } from "react-icons/fa";
import featureImg from "../../assets/img/feature-img.png"
const Features = () => {
    return (
        <div className=" container mx-auto py-9 px-[2%] ">
            <div className=" flex flex-col md:flex-row items-center justify-between">
                <div className=" w-full md:w-5/12">
                    <img className=" w-full md:w-10/12" src={featureImg} alt="" />
                </div>
                <div className="w-full md:w-7/12 space-y-5 md:pr-[10%]">
                    <p className="text-[#6a6a6abb]  font-semibold  text-xl">Featured Book of the week</p>
                    <h4 className="text-[#173F5F] font-bold text-4xl">Birds gonna be happy</h4>
                    <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    <p className="text-[#6a6a6abb] py-2 text-xl ">Jump start your book reading by quickly check through the popular book categories. 1000+ books are published by different authors everyday. Buy your favourite books on TreeBooks Today.</p>
                    <div className=" py-11">
                         <button className=' btn  btn-outline '>View more <span><FaLongArrowAltRight /></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;