import api from "./axios";

export const getUserByListingId = async (listingId) => {
    const response = await api.get(`/users/user-by-listing/${listingId}`);
    return response.data;
  };
  
