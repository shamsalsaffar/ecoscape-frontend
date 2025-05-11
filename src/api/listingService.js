import api from "./axios";

export const getAllListings = async () => {
  const response = await api.get("/api/listings");
  return response.data;
};

export const getListingById = async (id) => {
  const response = await api.get(`/api/listings/${id}`);
  return response.data;
};

export const getImagesByListingId = async (id) => {
  try {
    const response = await api.get(`api/images/all/${id}`);
    if (response.status === 404) {
      return [];
    }
    return response.data; 
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};
