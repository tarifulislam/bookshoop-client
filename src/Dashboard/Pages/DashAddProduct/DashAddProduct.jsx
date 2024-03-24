
const DashAddProduct = () => {
    return (
        <div className=" bg-[#262e3bf6]  min-h-screen">
            <div>
                <h2 className=" text-white text-2xl text-center py-3">Update New Book</h2>
                <div className=" w-9/12 mx-auto"> 
                <form  className=" space-y-3">
                            <div className="form-control">
                                <label className="label font-bold text-white">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label font-bold  text-white">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label font-bold  text-white">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label font-bold  text-white">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label font-bold  text-white">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label font-bold  text-white">
                                    <span className="label-text  text-white">Password</span>
                                </label>
                                   <input type="text" placeholder="password" name="name" className="input input-bordered " required />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-secondary">Update</button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    );
};

export default DashAddProduct;