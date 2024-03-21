import { useState } from "react";
import { Link } from "react-router-dom";
import sidePhoto from "../../assets/img/typeing.jpg"
import SocialLogin from "./SocialLogin";

const SignUp = () => {

    const [toogle, setToogle] = useState(true)
    return (
        <div className="">
            <div className="container mx-auto min-h-screen py-9 px-[10%]">
                <div className=" flex flex-col md:flex-row  justify-between items-center">
                    <div className="w-full  md:w-2/4  hidden md:block  pr-12">
                        <img className="  hidden md:block  ml-[10%] " src={sidePhoto} alt="" />
                    </div>

                    <div className="w-full md:w-2/4 p-12 rounded-md border">
                        <h1 className="text-4xl font-bold py-6 text-center">Sign In</h1>

                        <form  className=" space-y-3">
                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="">
                                <label className="label font-bold">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className=" relative form-control">
                                   <input type={toogle ? "password" : "text"} placeholder="password" name="password" className="input input-bordered " required />
                                   <button className=" absolute  right-4 top-3" onClick={()=> setToogle(!toogle)}>{toogle? "show" : "hide"}</button>
                                </div>
                          
                                
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-secondary">Sign in</button>
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <h4 className=" py-3 font-semibold text-base">Have an account? <Link to='/signin' className=" text-red-600 px-1">log In</Link> </h4>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;