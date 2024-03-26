import { FaHome, FaRegUser, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashMenu = () => {
    return (
        <div className=" space-y-6 min-h-screen">
            <div className="">
                <span>Main</span>
                <Link to='/dashboard' className="  flex gap-3 items-center p-2">
                    <span><FaHome /></span>
                    <span>Home</span>
                </Link>

                <Link className="  flex gap-3 items-center p-2">
                    <span><FaRegUser /></span>
                    <span>Profile</span>
                </Link>
            </div>
            <div className="">
                <span>Genarel</span>
                <Link className="  flex gap-3 items-center p-2">
                    <span><FaUsers /></span>
                    <span>User</span>
                </Link>

                <Link to='/dashaddproduct' className="  flex gap-3 items-center p-2">
                    <span><FaRegUser /></span>
                    <span>Product</span>
                </Link>

                <Link className="  flex gap-3 items-center p-2">
                    <span><FaRegUser /></span>
                    <span>Order</span>
                </Link>

                <Link className="  flex gap-3 items-center p-2">
                    <span><FaRegUser /></span>
                    <span>Post</span>
                </Link>
            </div>
            <div className="">
                <span>Analeytics</span>
                <Link className="  flex gap-3 items-center p-2">
                    <span><FaHome /></span>
                    <span>Charts</span>
                </Link>

                <Link className="  flex gap-3 items-center p-2">
                    <span><FaRegUser /></span>
                    <span>logs</span>
                </Link>
            </div>

        </div>
    );
};

export default DashMenu;