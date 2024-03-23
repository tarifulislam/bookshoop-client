const Profile = () => {
  // Sample user data
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    profileImage: 'https://example.com/profile.jpg',
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-8">
          <div className="flex justify-center">
            <img
              className="w-32 h-32 rounded-full object-cover"
              src={user.profileImage}
              alt="Profile"
            />
          </div>
          <h2 className="mt-4 text-3xl font-semibold text-center">{user.name}</h2>
          <p className="mt-2 text-sm text-gray-600 text-center">{user.email}</p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Bio</h3>
            <p className="mt-2 text-gray-600">{user.bio}</p>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Address</h3>
            <p className="mt-2 text-gray-600">
              {user.address}, {user.city}, {user.state}, {user.zipCode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
