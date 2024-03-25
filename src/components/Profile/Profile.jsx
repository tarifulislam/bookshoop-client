import useAuth from "../../hooks/useAuth";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Profile = () => {
  const { userDetails } = useAuth();
  return (
    <div className="">
      <Header />
      <div className="container mx-auto mt-8 py-20">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-8">
            <div className="flex justify-center">
              <img
                className="w-32 h-32 rounded-full object-cover"
                src={userDetails?.information?.profileImage}
                alt={userDetails?.name?.firstName}
              />
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-center capitalize">{userDetails?.name?.firstName}</h2>
            <p className="mt-2 text-sm text-gray-600 text-center">{userDetails?.email}</p>
            <div className="mt-2">
              <p className="mt-2 text-gray-600 text-center font-semibold">{userDetails?.information?.bio}</p>
            </div>
            <div className="mt-2">
              <h3 className="text-xl font-semibold">{userDetails?.city}</h3>
              <p className="mt-2 text-gray-600 text-center">
                {userDetails?.information?.address}, {userDetails?.information?.city}, {userDetails?.information?.state}, {userDetails?.information?.zipCode}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
