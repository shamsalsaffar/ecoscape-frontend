import api from "./axios";

export const getAllListings = async () => {
  const response = await api.get("/api/listings");
  return response.data;
};

export const getListingById = async (id) => {
  const response = await api.get(`/api/listings/${id}`);
  return response.data;
};

export const getImagesByListingId = async (listingId) => {
  try {
    const response = await api.get(`api/images/all/${listingId}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return [];
    }
    console.error("Error fetching images:", error);
    return [];
  }
};
