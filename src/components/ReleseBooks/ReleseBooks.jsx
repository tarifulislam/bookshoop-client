import bookOne from '../../assets/img/book1.png'
import bookTwo from '../../assets/img/book2.png'
import bookThree from '../../assets/img/book3.png'
import bookFour from '../../assets/img/book4.png'

import { IoEllipseOutline, IoEllipseSharp  } from "react-icons/io5";
const ReleseBooks = () => {
    return (
        <div className=' border-b-2 px-[2%]'>
            <div className=" container mx-auto py-9">
            <div className=" text-center space-y-3">
                <h2 className='text-[#173F5F] font-bold text-3xl'>New Release Books</h2>
                <p className=' text-[#6a6a6abb]'>1000+ books are published by different authors everyday. </p>
                <p className=' text-[#ED553B]'>View all products</p>
            </div>
            <div className=' grid grid-col md:grid-cols-4 gap-6 py-7'>

                <div className=' w-full shadow-md rounded-md p-4'>
                    <div className=' w-full'>
                        <img className=' w-36  h-48 mx-auto' src={bookOne} alt="" />
                    </div>
                    <div className=' text-center'>
                        <h2 className='text-[#173F5F] font-semibold text-xl py-3'>The Mind Connection</h2>
                        <h4 className='text-[#173f5fa9]'>Joyce Meyer</h4>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>

                <div className=' w-full shadow-md rounded-md p-4'>
                    <div className=' w-full'>
                        <img className=' w-36  h-48 mx-auto' src={bookTwo} alt="" />
                    </div>
                    <div className=' text-center'>
                        <h2 className='text-[#173F5F] font-semibold text-xl py-3'>The Road to Recognition</h2>
                        <h4 className='text-[#173f5fa9]'>Seth Price/ Barry Feldman </h4>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>

                <div className=' w-full shadow-md rounded-md p-4'>
                    <div className=' w-full'>
                        <img className=' w-36  h-48 mx-auto' src={bookThree} alt="" />
                    </div>
                    <div className=' text-center'>
                        <h2 className='text-[#173F5F] font-semibold text-xl py-3'>Battlefield of the mind</h2>
                        <h4 className='text-[#173f5fa9]'>Joyce Meyer</h4>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>

                <div className=' w-full shadow-md rounded-md p-4'>
                    <div className=' w-full'>
                        <img className=' w-36  h-48 mx-auto' src={bookFour} alt="" />
                    </div>
                    <div className=' text-center'>
                        <h2 className='text-[#173F5F] font-semibold text-xl py-3'>The Road to Recognition</h2>
                        <h4 className='text-[#173f5fa9]'>Barry Feldman</h4>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" /> 
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>

            </div>
            <div className=' flex justify-center'>
                <div className='flex space-x-1 pt-3'>
                    <span><IoEllipseOutline /></span>
                    <span className=' text-[#6a6a6a]'><IoEllipseSharp /></span>
                    <span className=' text-[#6a6a6a]'><IoEllipseSharp /></span>
                    <span className=' text-[#6a6a6a]'><IoEllipseSharp /></span>
                </div>
            </div>
        </div>
        </div>

    );
};

export default ReleseBooks;