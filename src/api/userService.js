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

export const requestHost = async (userId) => {
  const res = await api.post(`/users/request/${userId}`, null, {
    withCredentials: true,
  });
  return res.data;
};

export const getPendingUsers = async () => {
  const response = await api.get("/users/pending", {
    withCredentials: true,
  });
  return response.data;
};
