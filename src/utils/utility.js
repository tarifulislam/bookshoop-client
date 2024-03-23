export const filterUserInfo = (userData) => {
  const { role, ...basicInfo } = userData;
  let userDetails = { ...basicInfo };
  if (role === 'seller') {
    userDetails = {...userData.seller };
  } else if (role === 'donar') {
    userDetails = { ...userData.donar };
  }

  return userDetails;
};