import api from "./axios";

export const getUserByListingId = async (listingId) => {
  const response = await api.get(`/users/user-by-listing/${listingId}`);
  return response.data;
};

export const getUserById = async (userId) => {
  const response = await api.get(`/users/${userId}`);
  return response.data;
};

export const updateUser = async (id, data) => {
  const res = await api.put(`/users/${id}`, data, { withCredentials: true });
  return res.data;
};
