import { Outlet } from "react-router-dom";
import DashNavber from "../DashComponents/DashNavber/DashNavber";
import DashFooter from './../DashComponents/DashFooter/DashFooter';
import DashMenu from './../DashComponents/DashMenu/DashMenu';

const DashLayout = () => {
    return (
        <div>
            <DashNavber></DashNavber> 
            <div className="flex w-full">
                <div className=" w-2/12  border-r  border-[#6a6a6a]   bg-[#262e3bf3] text-white px-[1%]">
                    <DashMenu></DashMenu>
                </div>
                <div className="w-10/12 ">
                    <Outlet></Outlet>
                </div>
            </div>
            <div className="px-[1%] ">
                <DashFooter></DashFooter> 
            </div>

        </div>
    );
};

export default DashLayout;